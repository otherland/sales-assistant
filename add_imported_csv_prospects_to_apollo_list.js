// Helper function to wait for an element to appear
function waitForElement(selector, timeout = 10000) {
    return new Promise((resolve, reject) => {
      // Check if element already exists
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }
      // Set up a MutationObserver to watch for the element
      const observer = new MutationObserver((mutations, obs) => {
        const element = document.querySelector(selector);
        if (element) {
          obs.disconnect();
          resolve(element);
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      // Set timeout
      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Timeout waiting for element: ${selector}`));
      }, timeout);
    });
  }
  
  // Helper function to wait/pause
  function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Helper function to properly click elements that may need focus
  function clickElement(element) {
    // Scroll element into view
    element.scrollIntoView({ behavior: 'instant', block: 'nearest' });
    // Focus the element first
    element.focus();
    // Dispatch all the events a real click would trigger
    element.dispatchEvent(new MouseEvent('mousedown', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    element.dispatchEvent(new MouseEvent('mouseup', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    element.dispatchEvent(new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    }));
    // Also try the regular click method
    element.click();
  }
  
  // Main execution function
  async function executeClicks() {
    try {
      console.log('Step 1: Clicking bulk select checkbox...');
      const checkbox = await waitForElement('input[type="checkbox"][aria-label="View more options to select rows"]');
      checkbox.click();
      await wait(1000);
  
  console.log('Step 2: Clicking "Select all"...');
  // Find the radio input with value="all"
  const selectAllRadio = document.querySelector('input[type="radio"][name="selectionType"][value="all"]');
  
  if (selectAllRadio) {
    clickElement(selectAllRadio);
  } else {
    throw new Error('Could not find Select all radio button');
  }
  await wait(1000);
  
  console.log('Step 3: Clicking Apply button...');
  // Find the Apply button by its text content and attributes
  const applyButton = Array.from(document.querySelectorAll('button[type="submit"][data-cta-variant="primary"]'))
    .find(btn => btn.textContent.trim() === 'Apply');
  
  if (applyButton) {
    clickElement(applyButton);
  } else {
    throw new Error('Could not find Apply button');
  }
  await wait(1000);
  
      console.log('Step 4: Waiting for "Add to list" button to appear...');
      // Wait for the Add to list button to appear (it takes a few seconds)
      const addToListButton = await waitForElement('button[data-tour="add-to-list"]', 15000);
      console.log('"Add to list" button found!');
      await wait(1000);
  
      console.log('Step 5: Clicking "Add to list" button...');
      clickElement(addToListButton);
      console.log('Waiting for dropdown to appear...');
      await wait(2000);
  
      console.log('Step 6: Clicking first item in the list...');
      // Wait for the dialog to appear
      await waitForElement('[data-dialog][role="dialog"]', 5000);
      await wait(500);
  
      // Find the first option's clickable element (the anchor tag with role="button")
      let clickableElement = document.querySelector('[data-dialog][role="dialog"] [role="option"] a[role="button"]');
      
      if (!clickableElement) {
        // Fallback to finding any anchor in the first option
        const firstOption = document.querySelector('[data-dialog][role="dialog"] [role="option"]');
        if (firstOption) {
          clickableElement = firstOption.querySelector('a[role="button"]');
        }
      }
      
      if (!clickableElement) {
        // Last fallback to the option itself
        clickableElement = document.querySelector('[data-dialog][role="dialog"] [role="option"]');
      }
  
      if (clickableElement) {
        const optionContainer = clickableElement.closest('[data-value]');
        const optionValue = optionContainer?.getAttribute('data-value') || clickableElement.textContent.trim();
        console.log('Found first option:', optionValue);
        console.log('Clicking element:', clickableElement);
        clickableElement.click();
        
        // Wait and check if it got selected
        await wait(500);
        const selectedOption = document.querySelector('[data-dialog][role="dialog"] [role="option"][aria-selected="true"]');
        if (selectedOption) {
          console.log('Option selected successfully!');
        } else {
          console.log('Option might not have been selected, trying again...');
          clickableElement.click();
        }
      } else {
        throw new Error('Could not find first option in list');
      }
      await wait(1000);
  
      console.log('Step 7: Clicking final "Add to list" button...');
      // Wait for the button to become enabled
      await wait(500);
      
      // Find the final "Add to list" button in the dialog footer
      const dialogButtons = Array.from(document.querySelectorAll('[data-dialog][role="dialog"] button[type="button"][data-cta-variant="primary"]'));
      let finalButton = dialogButtons.find(btn => btn.textContent.includes('Add to list') && btn.getAttribute('aria-disabled') !== 'true');
      
      if (!finalButton) {
        // Try finding it without checking aria-disabled
        finalButton = dialogButtons.find(btn => btn.textContent.includes('Add to list'));
      }
  
      if (finalButton) {
        console.log('Clicking final Add to list button...');
        clickElement(finalButton);
      } else {
        throw new Error('Could not find final Add to list button');
      }
  

      console.log('Step 8: Waiting for completion toast...');

      // Wait for the completion toast notification to appear
      await new Promise((resolve, reject) => {
        const timeout = 60000; // 60 second timeout for large lists
        const startTime = Date.now();
        
        const checkInterval = setInterval(() => {
          // Look for the toast notification with role="alertdialog"
          const toast = document.querySelector('[role="alertdialog"]');
          
          if (toast) {
            // Check if toast contains "Completed" and "Finished adding" text
            const toastText = toast.textContent;
            
            if (toastText.includes('Completed') && 
                toastText.includes('Finished adding') && 
                toastText.includes('prospects')) {
              
              // Extract the numbers to log them
              const match = toastText.match(/Finished adding\s+(\d+)\s+out of\s+(\d+)\s+prospects/);
              if (match) {
                console.log(`✅ Completion confirmed: Added ${match[1]} out of ${match[2]} prospects`);
                clearInterval(checkInterval);
                resolve();
              }
            }
          }
          
          // Check timeout
          if (Date.now() - startTime > timeout) {
            clearInterval(checkInterval);
            reject(new Error('Timeout waiting for completion toast'));
          }
        }, 500); // Check every 500ms
      });
  
      console.log('✅ All steps completed successfully!');
      
    } catch (error) {
      console.error('❌ Error:', error.message);
      console.log('Current DOM state:');
      console.log('Dialog:', document.querySelector('[data-dialog][role="dialog"]'));
      console.log('Options in dialog:', document.querySelectorAll('[data-dialog][role="dialog"] [role="option"]'));
      console.log('Anchor elements:', document.querySelectorAll('[data-dialog][role="dialog"] a[role="button"]'));
      console.log('Add to list buttons:', document.querySelectorAll('[data-dialog][role="dialog"] button[data-cta-variant="primary"]'));
    }
  }
  
  // Run the script
  executeClicks();
  