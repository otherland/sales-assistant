#!/usr/bin/env python3
"""
Test SMTP and IMAP functionality for Wexley email accounts
"""

import smtplib
import imaplib
import email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import time
from datetime import datetime

# Outlook SMTP and IMAP settings
SMTP_SERVER = "smtp.office365.com"
SMTP_PORT = 587
IMAP_SERVER = "outlook.office365.com"
IMAP_PORT = 993

# Email accounts to test
ACCOUNTS = [
    {
        "email": "oliver.harrison@wexleyinvestments.com",
        "password": "3n:a!u55|5Kc"
    },
    {
        "email": "sophie.turner@wexleyinvestments.com",
        "password": "h1a;)PG4Krud"
    },
    {
        "email": "james.mitchell@wexleyinvestments.com",
        "password": "|2{d+L>wip+m"
    },
    {
        "email": "emma.clarke@wexleyinvestments.com",
        "password": "yHGTK@zdJE@8"
    }
]

def test_smtp_login(email_addr, password):
    """Test SMTP login for an account"""
    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.set_debuglevel(0)
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(email_addr, password)
        server.quit()
        print(f"✓ SMTP Login successful: {email_addr}")
        return True
    except Exception as e:
        print(f"✗ SMTP Login failed: {email_addr}")
        print(f"  Error: {str(e)}")
        return False

def test_imap_login(email_addr, password):
    """Test IMAP login for an account"""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(email_addr, password)
        mail.select('INBOX')
        mail.logout()
        print(f"✓ IMAP Login successful: {email_addr}")
        return True
    except Exception as e:
        print(f"✗ IMAP Login failed: {email_addr}")
        print(f"  Error: {str(e)}")
        return False

def send_test_email(from_addr, from_pass, to_addr):
    """Send a test email"""
    try:
        msg = MIMEMultipart()
        msg['From'] = from_addr
        msg['To'] = to_addr
        msg['Subject'] = f"Test Email - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
        
        body = f"""This is a test email from {from_addr} to {to_addr}.
        
Sent at: {datetime.now()}
Test ID: {int(time.time())}

If you receive this, the email system is working correctly!"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(from_addr, from_pass)
        text = msg.as_string()
        server.sendmail(from_addr, to_addr, text)
        server.quit()
        
        print(f"✓ Email sent: {from_addr} → {to_addr}")
        return True
    except Exception as e:
        print(f"✗ Email send failed: {from_addr} → {to_addr}")
        print(f"  Error: {str(e)}")
        return False

def check_recent_emails(email_addr, password, sender_email=None):
    """Check for recent emails in inbox"""
    try:
        mail = imaplib.IMAP4_SSL(IMAP_SERVER, IMAP_PORT)
        mail.login(email_addr, password)
        mail.select('INBOX')
        
        # Search for recent emails
        if sender_email:
            status, messages = mail.search(None, f'(FROM "{sender_email}")')
        else:
            status, messages = mail.search(None, 'ALL')
        
        email_ids = messages[0].split()
        
        if not email_ids:
            print(f"  No emails found in {email_addr}")
            mail.logout()
            return 0
        
        # Get the most recent 5 emails
        recent_count = min(5, len(email_ids))
        print(f"  Found {len(email_ids)} total emails in {email_addr}")
        
        for email_id in email_ids[-recent_count:]:
            status, msg_data = mail.fetch(email_id, '(RFC822)')
            msg = email.message_from_bytes(msg_data[0][1])
            subject = msg['subject']
            from_addr = msg['from']
            date = msg['date']
            print(f"    - From: {from_addr}, Subject: {subject}, Date: {date}")
        
        mail.logout()
        return len(email_ids)
    except Exception as e:
        print(f"✗ Failed to check emails for {email_addr}")
        print(f"  Error: {str(e)}")
        return -1

def main():
    print("=" * 70)
    print("EMAIL ACCOUNT TESTING - WEXLEY INVESTMENTS")
    print("=" * 70)
    
    # Test 1: SMTP Login for all accounts
    print("\n[TEST 1] SMTP LOGIN TESTS")
    print("-" * 70)
    smtp_results = {}
    for account in ACCOUNTS:
        smtp_results[account['email']] = test_smtp_login(account['email'], account['password'])
    
    # Test 2: IMAP Login for all accounts
    print("\n[TEST 2] IMAP LOGIN TESTS")
    print("-" * 70)
    imap_results = {}
    for account in ACCOUNTS:
        imap_results[account['email']] = test_imap_login(account['email'], account['password'])
    
    # Test 3: Send test emails between accounts
    print("\n[TEST 3] SEND EMAIL TESTS")
    print("-" * 70)
    send_results = []
    
    # Send from Oliver to Sophie
    if smtp_results[ACCOUNTS[0]['email']]:
        result = send_test_email(
            ACCOUNTS[0]['email'], ACCOUNTS[0]['password'],
            ACCOUNTS[1]['email']
        )
        send_results.append(result)
    
    # Send from Sophie to James
    if smtp_results[ACCOUNTS[1]['email']]:
        result = send_test_email(
            ACCOUNTS[1]['email'], ACCOUNTS[1]['password'],
            ACCOUNTS[2]['email']
        )
        send_results.append(result)
    
    # Send from James to Emma
    if smtp_results[ACCOUNTS[2]['email']]:
        result = send_test_email(
            ACCOUNTS[2]['email'], ACCOUNTS[2]['password'],
            ACCOUNTS[3]['email']
        )
        send_results.append(result)
    
    # Send from Emma back to Oliver
    if smtp_results[ACCOUNTS[3]['email']]:
        result = send_test_email(
            ACCOUNTS[3]['email'], ACCOUNTS[3]['password'],
            ACCOUNTS[0]['email']
        )
        send_results.append(result)
    
    # Wait for emails to arrive
    print("\n⏳ Waiting 10 seconds for emails to be delivered...")
    time.sleep(10)
    
    # Test 4: Check if emails were received
    print("\n[TEST 4] RECEIVE EMAIL TESTS")
    print("-" * 70)
    
    print(f"\nChecking Sophie's inbox for email from Oliver:")
    check_recent_emails(ACCOUNTS[1]['email'], ACCOUNTS[1]['password'], ACCOUNTS[0]['email'])
    
    print(f"\nChecking James's inbox for email from Sophie:")
    check_recent_emails(ACCOUNTS[2]['email'], ACCOUNTS[2]['password'], ACCOUNTS[1]['email'])
    
    print(f"\nChecking Emma's inbox for email from James:")
    check_recent_emails(ACCOUNTS[3]['email'], ACCOUNTS[3]['password'], ACCOUNTS[2]['email'])
    
    print(f"\nChecking Oliver's inbox for email from Emma:")
    check_recent_emails(ACCOUNTS[0]['email'], ACCOUNTS[0]['password'], ACCOUNTS[3]['email'])
    
    # Summary
    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    smtp_success = sum(smtp_results.values())
    imap_success = sum(imap_results.values())
    send_success = sum(send_results)
    
    print(f"SMTP Login:  {smtp_success}/{len(ACCOUNTS)} accounts successful")
    print(f"IMAP Login:  {imap_success}/{len(ACCOUNTS)} accounts successful")
    print(f"Email Sends: {send_success}/{len(send_results)} emails sent successfully")
    
    if smtp_success == len(ACCOUNTS) and imap_success == len(ACCOUNTS) and send_success == len(send_results):
        print("\n✓ ALL TESTS PASSED - Email system is fully operational!")
    else:
        print("\n⚠ SOME TESTS FAILED - Please review the errors above")
    
    print("=" * 70)

if __name__ == "__main__":
    main()

