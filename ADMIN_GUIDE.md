# Westminster Woods - Admin Panel Guide

## Overview
The Westminster Woods website now includes a complete admin system that allows authorized administrators to manage events, photos, and community content through a user-friendly web interface. No coding knowledge required!

---

## 🔐 Admin Access

### Login Page
- **URL:** `/admin-login.html`
- **Demo Credentials:**
  - Username: `admin`
  - Password: `admin123`

### Important Security Notes
- Change the default credentials immediately after first login
- Only share login information with authorized administrators
- Each admin has access to all content management functions

---

## 📅 Managing Events

### Accessing Event Manager
1. Click the **"Admin"** button in the top navigation (purple button)
2. Log in with your credentials
3. Click **"Manage Events"** in the sidebar or dashboard
4. Or go directly to `/admin-events.html`

### Adding a New Event
1. Click the **"Add New Event"** button (top right)
2. Fill in the form:
   - **Event Title:** Name of your event (required)
   - **Date:** Pick the event date (required)
   - **Time:** Set the event time (required)
   - **Location:** Where the event will be held (required)
   - **Category:** Choose from:
     - Social
     - Educational
     - Charity
     - Sports
   - **Description:** Detailed event description (required)
   - **Image URL:** (Optional) Link to event image
3. Click **"Save Event"**
4. Event automatically appears on the website!

### Editing Events
1. Find the event in the Events list
2. Click the **"Edit"** button
3. Modify any fields
4. Click **"Save Event"**

### Deleting Events
1. Find the event in the Events list
2. Click the **"Delete"** button
3. Confirm the deletion
4. Event is immediately removed from the website

### Event Display
- **Home Page:** Shows the next 3 upcoming events in a rolling carousel
- **Events Page:** Shows all events with filtering by category
- **Automatic Updates:** Changes appear instantly on the website

---

## 📸 Managing Photos

### Accessing Photo Manager
1. Click the **"Admin"** button in navigation
2. Log in with credentials
3. Click **"Manage Photos"** in sidebar
4. Or go directly to `/admin-photos.html`

### Uploading Photos
1. Click **"Upload Photo"** button (top right)
2. Fill in the form:
   - **Photo Title:** Name of the photo (required)
   - **Photo URL:** Link to the image online (required)
     - Can be from any public image hosting service
     - Examples: Imgur, Unsplash, Cloud storage links
   - **Category:** Choose from:
     - Events
     - Community
     - Activities
   - **Description:** Photo details (optional)
3. A preview will show as you type the URL
4. Click **"Upload Photo"**
5. Photo automatically appears in the gallery!

### Editing Photos
1. Find the photo in the grid
2. Click **"Edit"** button
3. Modify the title, URL, category, or description
4. Click **"Upload Photo"** to save changes

### Deleting Photos
1. Find the photo in the grid
2. Click **"Delete"** button
3. Confirm deletion
4. Photo is removed from the website

### Finding Photos Online
**Free image sources:**
- Unsplash.com - High quality free photos
- Pixabay.com - Free community images
- Pexels.com - Community shared photos
- Imgur.com - Upload and share photos
- Drive.google.com - Share photos from Google Drive

**How to get a photo URL:**
1. Right-click the image online
2. Select "Copy image link"
3. Paste into the Photo URL field in admin

---

## 📊 Dashboard

### Dashboard Features
- **Total Events:** Count of all events
- **Upcoming Events:** Events scheduled for future dates
- **Total Photos:** Count of all photos
- **Recent Events:** List of latest 5 events
- **Recent Photos:** Grid of latest 6 photos
- **Quick Actions:** Fast access to common tasks

### Statistics
- View all key metrics at a glance
- See community engagement summary
- Track content growth over time

---

## 🔄 Rolling Events (Home Page)

### What are Rolling Events?
Rolling events are the "live" events that appear on the home page in a special section. They automatically update as new events are added.

### Features
- **Automatic Display:** Latest 3 upcoming events shown
- **Live Updates:** Changes appear instantly
- **Sorted by Date:** Events ordered by date automatically
- **Auto-Filtering:** Only shows future events (past events hidden)
- **Responsive:** Works on mobile, tablet, and desktop

### How to Make Events Appear
1. Add or edit an event through Admin Events page
2. Set a future date
3. Event automatically appears on home page in rolling section
4. Users can click to view full event details

---

## 👤 Admin Profile

### Profile Features
- View your admin username
- **Change Password:** Update your login password
- **Preferences:** Control notifications and alerts
- **Activity Log:** Track what has been done
- **Clear All Data:** (Danger zone) - Delete all content

### Changing Your Password
1. Go to **"Profile"** from admin menu
2. Enter your current password
3. Enter new password twice (to confirm)
4. Click **"Update Password"**
5. Log in next time with new password

---

## 🎨 Using Image URLs

### Important: Photos Must Be Online
- Photos are managed by URL, not uploaded to server
- Image link must be accessible from the internet
- No local file uploads needed

### How to Use Image URLs
1. **Find a photo online** on any public website
2. **Right-click the image** → "Copy image link"
3. **Paste into Photo URL field** in admin panel
4. **See preview** before saving
5. **Click Upload** when satisfied

### Troubleshooting Images
- If image doesn't show, URL might be expired or blocked
- Try a different image source
- Make sure URL starts with `http://` or `https://`
- Some websites block image linking - use free image sites instead

---

## 📱 Responsive Design

### Admin Panel Works On
- ✅ Desktop computers
- ✅ Tablets (iPad, Android tablets)
- ✅ Mobile phones
- ✅ Any modern web browser

### Website Display
All events and photos automatically display properly on:
- Mobile phones
- Tablets
- Desktop computers
- Different screen sizes

---

## 💾 Data Storage

### How Data Is Stored
- All events and photos stored in browser's local storage
- Data persists between sessions
- Safe and secure
- No external servers needed

### Backup Your Data
- Data is tied to this browser
- Use same browser to access admin panel
- If you clear browser data, events/photos may be lost
- Consider taking screenshots or exporting data

---

## 🔒 Security Best Practices

1. **Change Default Password Immediately**
   - Default password: `admin123` is just for demo
   - Create a strong, unique password

2. **Don't Share Login Credentials**
   - Only authorized admins should have access
   - Keep passwords confidential

3. **Log Out When Done**
   - Always click "Logout" when finished
   - Don't leave admin panel open

4. **Use Secure Connection**
   - Use website through HTTPS when available
   - Avoid public WiFi for admin access

---

## 🆘 Troubleshooting

### Can't Log In
- Check username (should be "admin" or custom)
- Verify password is correct
- No spaces or caps issues - be exact
- Click "Back to Website" link if locked out

### Events Not Showing
- Make sure event date is in the future
- Check event was saved successfully
- Try refreshing the page
- Check home page "Upcoming Events" section

### Photos Not Displaying
- Verify image URL is correct
- Try copying image link again from source
- Check internet connection
- Try a different image URL

### Admin Button Not Visible
- Look for purple "Admin" button in top right
- Make sure browser isn't too narrow (mobile view)
- Check if logged out - button appears on all pages

---

## 📝 Tips & Best Practices

### For Events
✅ Use clear, descriptive titles
✅ Add detailed descriptions
✅ Include correct date and time
✅ Pick appropriate category
✅ Use good quality event images

❌ Don't use vague titles
❌ Leave description empty
❌ Use wrong date/time
❌ Use low quality images
❌ Duplicate events

### For Photos
✅ Use good quality images
✅ Add descriptive titles
✅ Write helpful captions
✅ Organize by category
✅ Check image loads before saving

❌ Don't use blurry images
❌ Leave titles blank
❌ Use broken URLs
❌ Mix unrelated photos
❌ Upload huge file sizes

---

## 📞 Support

For questions about the admin system:
- Contact: info@westminsterwoods.ca
- Check this guide first
- Refer to troubleshooting section

---

## 🎉 Quick Start Checklist

- [ ] Log in to admin panel with credentials
- [ ] Change default password
- [ ] Add your first event
- [ ] Upload a community photo
- [ ] Check home page for rolling events
- [ ] Test photo gallery
- [ ] Verify all displays correctly
- [ ] Log out properly

---

**Westminster Woods Admin System**
*Making community management easy!*

Version 1.0 | Last Updated: April 2024
