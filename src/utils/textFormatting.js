/**
 * Text formatting utilities for sales script content
 */

/**
 * Formats script text with proper styling for pauses, questions, and paragraphs
 * @param {string} scriptText - The raw script text to format
 * @returns {string} Formatted HTML string
 */
export function formatScript(scriptText) {
    if (!scriptText) return '';
    
    // Split into paragraphs
    let formatted = scriptText
        // Replace parenthetical pauses/notes with styled spans
        .replace(/\(([^)]+)\)/g, '<span class="script-pause">($1)</span>')
        // Split by double newlines for paragraphs
        .split('\n\n')
        .map(para => {
            // Trim the paragraph
            para = para.trim();
            if (!para) return '';
            
            // Wrap questions with emphasis
            if (para.includes('?')) {
                para = para.replace(/([^.!?]*\?)/g, '<span class="script-question">$1</span>');
            }
            
            return `<span class="script-paragraph">${para}</span>`;
        })
        .filter(p => p)
        .join('');
    
    return formatted;
}

/**
 * Converts text references to clickable links
 * Maps common terms to their content/reference IDs
 * @param {string} text - The text to linkify
 * @returns {string} HTML string with clickable links
 */
export function linkifyReferences(text) {
    if (!text) return '';
    
    // Map of reference patterns to their item IDs and display names
    const referenceMap = [
        // Sequential flow items
        { pattern: /\b(engagement model|Engagement Model|the engagement model)\b/gi,
          itemId: 'discovery_framework',
          isReference: true,
          text: 'Engagement Model' },
        { pattern: /\b(The 'Tic'|the 'Tic'|Tic admission|process repeatability)\b/gi, 
          itemId: 'discovery_bottom_funnel', 
          text: "The 'Tic' — Process Repeatability" },
        { pattern: /\b(The 'Tac'|the 'Tac'|Tac|A\/B\/C framework|A\/B\/C standard)\b/gi, 
          itemId: 'defining_qualified_opportunities', 
          text: "The 'Tac' — Defining Qualified Opportunities" },
        { pattern: /\b(The 'Toe'|the 'Toe'|Toe|power transfer)\b/gi,
          itemId: 'qoa_deployment_guide',
          text: "The 'Toe' — Power Transfer" },
        { pattern: /\b(Tic-Tac-Toe|Tic-Tac-Toe™)\b/gi, 
          itemId: 'defining_qualified_opportunities', 
          text: 'Tic-Tac-Toe™ Sequence' },
        { pattern: /\b(QOA|QOA™|Qualified Opportunity Anchor)\b/gi,
          itemId: 'qoa_deployment_guide',
          text: 'QOA™' },
        { pattern: /\b(CARPET|CARPET Framework)\b/gi, 
          itemId: 'carpet_framework', 
          isReference: true, 
          text: 'CARPET Framework' },
        { pattern: /\b(discovery framework|Discovery Framework)\b/gi,
          itemId: 'discovery_framework',
          isReference: true,
          text: 'Discovery Framework' },
        { pattern: /\b(bottom of funnel|Bottom of Funnel)\b/gi, 
          itemId: 'discovery_bottom_funnel', 
          text: 'Bottom of Funnel' },
        { pattern: /\b(universal objection|Universal Objection Handle)\b/gi, 
          itemId: 'universal_objection_handle', 
          text: 'Universal Objection Handle' },
        { pattern: /\b(referrals objection|Referrals Objection)\b/gi, 
          itemId: 'referrals_objection_mastery', 
          isReference: true, 
          text: 'Referrals Objection Mastery' },
        { pattern: /\b(QOA Mastery|QOA Training|Qualified Opportunity Anchor Mastery)\b/gi, 
          itemId: 'qualified_opportunity_anchor_mastery', 
          isReference: true, 
          text: 'QOA™ Complete Training Guide' }
    ];
    
    let linkedText = text;
    
    // Handle objection number references like "objection #5" or "objection 5"
    linkedText = linkedText.replace(/\b(objection\s*#?(\d+)|objection\s+number\s+(\d+))\b/gi, (match, p1, num1, num2) => {
        const objectionNum = parseInt(num1 || num2);
        if (objectionNum >= 1 && objectionNum <= 17) {
            return `<a href="#" data-action="loadObjection" data-id="${objectionNum}" class="content-link" style="color: var(--primary-color); text-decoration: underline; cursor: pointer; font-weight: 600;">${match}</a>`;
        }
        return match;
    });
    
    // Handle other references - skip if text already contains HTML links to avoid double-processing
    if (!linkedText.includes('<a href="#" data-action=')) {
        referenceMap.forEach(ref => {
            linkedText = linkedText.replace(ref.pattern, (match) => {
                try {
                    const action = ref.isReference ? 'loadReferenceContent' : 'loadContent';
                    const escapedItemId = ref.itemId.replace(/"/g, '&quot;');
                    const titleText = ref.text.replace(/"/g, '&quot;');

                    // Validate that action and itemId exist
                    if (!action || !escapedItemId) {
                        console.warn(`Invalid reference configuration for: ${match}`, { action, escapedItemId, ref });
                        return match; // Return original text if config is invalid
                    }

                    return `<a href="#" data-action="${action}" data-id="${escapedItemId}" class="content-link" style="color: var(--primary-color); text-decoration: underline; cursor: pointer; font-weight: 600;" title="Click to view ${titleText}">${match}</a>`;
                } catch (error) {
                    console.error(`Error creating link for reference: ${match}`, error, { ref });
                    return match; // Return original text on error
                }
            });
        });
    }
    
    return linkedText;
}

// Expose to window for components that use dangerouslySetInnerHTML
if (typeof window !== 'undefined') {
    window.formatScript = formatScript;
    window.linkifyReferences = linkifyReferences;
}

