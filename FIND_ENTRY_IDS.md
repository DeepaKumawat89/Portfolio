# 🚀 Quick Setup - Find Your Entry IDs

## Your Form URL:
https://docs.google.com/forms/d/e/1FAIpQLScjYYvHNXpeLx1Ihj9lXfZIki11dv5v_V8IIEskzpv56MYbKg/viewform

---

## ✅ Step 1: Form URL - DONE!
Your form URL has been automatically configured in `Contact.jsx`

---

## ⚠️ Step 2: Get Entry IDs (5 minutes)

### Visual Guide:

1. **Open your form** in Chrome/Edge/Firefox:
   - Click here: https://docs.google.com/forms/d/e/1FAIpQLScjYYvHNXpeLx1Ihj9lXfZIki11dv5v_V8IIEskzpv56MYbKg/viewform

2. **For the NAME field:**
   - Right-click on the Name input box
   - Select "Inspect" (or press F12)
   - In the code panel, you'll see something like:
     ```html
     <input type="text" name="entry.123456789" ...>
     ```
   - **Copy the full text**: `entry.123456789`

3. **Repeat for EMAIL, SUBJECT, and MESSAGE fields**

4. **Update Contact.jsx** (lines 24-27):
   ```javascript
   const FORM_FIELDS = {
       name: "entry.123456789",      // ← Paste your Name entry ID here
       email: "entry.987654321",     // ← Paste your Email entry ID here
       subject: "entry.555555555",   // ← Paste your Subject entry ID here
       message: "entry.111111111"    // ← Paste your Message entry ID here
   };
   ```

---

## 📝 Example:

If you inspect and find:
- Name field: `<input name="entry.2005620554">`
- Email field: `<input name="entry.1045781291">`
- Subject field: `<input name="entry.839337160">`
- Message field: `<textarea name="entry.1065046570">`

Then update your code to:
```javascript
const FORM_FIELDS = {
    name: "entry.2005620554",
    email: "entry.1045781291",
    subject: "entry.839337160",
    message: "entry.1065046570"
};
```

---

## 🎯 Where to Update:

**File:** `d:\My_Portfolio\src\components\Contact.jsx`  
**Lines:** 24-27

Look for:
```javascript
const FORM_FIELDS = {
    name: "entry.YOUR_NAME_ID",      // ⚠️ Replace this
    email: "entry.YOUR_EMAIL_ID",    // ⚠️ Replace this
    subject: "entry.YOUR_SUBJECT_ID", // ⚠️ Replace this
    message: "entry.YOUR_MESSAGE_ID"  // ⚠️ Replace this
};
```

---

## ✅ Test Your Form:

After updating the entry IDs:
1. Save the file
2. Go to your portfolio (http://localhost:5173 or your dev server)
3. Fill out the contact form
4. Click "Send Message"
5. Check your Google Form responses!

---

## 🔍 Troubleshooting:

**Can't find the entry IDs?**
- Make sure you're inspecting the actual input/textarea element
- Look for `name="entry.XXXXXXX"` in the HTML
- The numbers will be 9-10 digits long

**Form not submitting?**
- Double-check you copied the FULL entry ID including "entry."
- Make sure there are no extra spaces
- Verify all 4 fields have different entry IDs

---

## 📧 Need Help?

If you're stuck, you can:
1. Take a screenshot of the inspect panel
2. Or use an alternative like EmailJS (let me know!)
