# Westminster Woods Community Website

A complete, responsive community website for Westminster Woods with built-in admin system for managing events, photos, and community content.

## 📋 Project Overview

The Westminster Woods website is a fully functional, modern community platform built with:
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (no frameworks)
- **Icons:** FontAwesome 6.4.0
- **Data Storage:** Browser localStorage
- **Authentication:** Admin login system
- **Design:** Fully responsive (mobile, tablet, desktop)

## 🚀 Quick Start

### Access the Website
1. Open `index.html` in your web browser
2. Browse the public website normally
3. Click the purple "Admin" button to access admin panel
4. Login with:
   - Username: `admin`
   - Password: `admin123`

### Website Features
- **Home Page** - Landing page with hero section, upcoming events, quick links
- **Events** - Full events listing with category filtering
- **Photos** - Photo gallery with category organization
- **News** - Blog-style news and updates
- **About Us** - Community information and team
- **Volunteer** - Volunteer registration form
- **Contact** - Contact form and location map
- **Donations** - Multiple donation methods

### Admin Features
- **Event Management** - Add, edit, delete events
- **Photo Management** - Upload and manage photos
- **Admin Dashboard** - View statistics and recent content
- **Admin Profile** - Change password and preferences
- **Auto-Save** - All changes stored automatically

## 📁 Project Structure

```
WestminsterWoods/
├── index.html                 # Home page
├── events.html                # Events listing
├── photos.html                # Photo gallery
├── news.html                  # News & updates
├── about.html                 # About us
├── volunteer.html             # Volunteer registration
├── contact.html               # Contact & location
├── donations.html             # Donation page
│
├── admin-login.html           # Admin login
├── admin-dashboard.html       # Admin overview
├── admin-events.html          # Event management
├── admin-photos.html          # Photo management
├── admin-profile.html         # Admin settings
│
├── css/
│   ├── style.css              # Main website styling (~2000 lines)
│   └── admin.css              # Admin panel styling (~700 lines)
│
├── js/
│   ├── script.js              # Main website functionality
│   └── admin.js               # Admin system functions
│
├── ADMIN_GUIDE.md             # Complete admin user guide
├── README.md                  # This file
└── assets/                    # Fonts, images (if any local assets)
```

## 🎨 Color Scheme

- **Primary Blue:** #2c5aa0 - Main brand color
- **Secondary Orange:** #e8734d - Accent color
- **Admin Purple:** #9b59b6 - Admin button color
- **Dark Gray:** #2c3e50 - Text and headers
- **Light Gray:** #ecf0f1 - Background

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and up
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🔐 Admin System

### Default Credentials
- **Username:** admin
- **Password:** admin123
- ⚠️ **Change these immediately** after first login

### Admin Capabilities
- Manage community events (CRUD operations)
- Upload and manage photos
- View dashboard statistics
- Change admin password
- Manage admin preferences

### Data Storage
- Events and photos stored in browser localStorage
- No external database or server required
- Data persists between browser sessions
- Within the same browser only

## 🎯 Core Features

### Events Management
- Add events with title, date, time, location, category, description
- Categories: Social, Educational, Charity, Sports
- Edit existing events
- Delete events
- Automatic display on home page (next 3 upcoming)
- Full listing on events page with category filtering
- Image URL support for event visuals

### Photo Management
- Upload photos via URL
- Categories: Events, Community, Activities
- Search and filter photos
- Image preview before save
- Gallery display on photos page
- Edit and delete functionality

### Home Page Rolling Events
- Displays next 3 upcoming events
- Auto-sorted by date
- Updates when new events added
- Shows event title, date, location, description
- Click-through to view full event details

### Interactive Forms
- Newsletter signup
- Volunteer registration (6 opportunity types)
- Contact form with validation
- All forms provide user feedback

### Navigation
- Consistent header/navigation across all pages
- Active page highlighting
- Admin link (purple button) on all pages
- Mobile-friendly hamburger menu

## 🔄 How Data Flows

### Admin → Public Display

1. **Admin Creates Event**
   - Fills event form in admin-events.html
   - Clicks "Save Event"
   - Event data saved to localStorage (`communityEvents`)

2. **Event Appears on Website**
   - Home page loads and checks localStorage
   - Displays next 3 upcoming events
   - Events page loads all events with filters
   - Updates happen in real-time

3. **Photo Uploads**
   - Admin uploads photo with title, URL, category
   - Saved to localStorage (`communityPhotos`)
   - Appears in photo gallery immediately

## 📖 Documentation

- **Admin Guide:** See [ADMIN_GUIDE.md](ADMIN_GUIDE.md) for complete admin instructions
- **This File:** General project overview and structure

## 🆘 Troubleshooting

### Events not showing on home page
- Ensure event date is in future (past events hidden)
- Check admin dashboard shows event was saved
- Try refreshing page with Ctrl+Shift+R (hard refresh)

### Photos not loading
- Verify image URL is correct
- Check URL is accessible (try opening in new tab)
- Try different image source

### Can't access admin panel
- Check browser supports JavaScript
- Try different browser
- Clear browser cache and cookies

### Data disappeared
- localStorage data is browser-specific
- Using private/incognito mode clears data
- Clearing browser data will remove stored information

## 📝 License & Credits

- Icons: FontAwesome 6.4.0
- Built for: Westminster Woods Community
- Type: Community Website with Admin CMS
- Update team information in `about.html`
- Add social media links in footer

### Add Events
- Edit events in `data/events.json`
- Events will auto-populate in home page and events page

### Add Photos
- Place images in `assets/images/`
- Update photo filenames in `photos.html`

### Change Colors
- Modify CSS variables in `css/style.css`
- Color scheme uses primary blue (#2c5aa0) and secondary orange (#e8734d)

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- FontAwesome Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Features Included

✅ Responsive Design
✅ Modern UI/UX
✅ Event Management
✅ Volunteer Registration
✅ Donation Integration
✅ Photo Gallery
✅ News & Updates
✅ Contact Forms
✅ Social Media Integration
✅ Mobile Friendly

## Contact & Support

For questions or support regarding the website, please contact:
- Email: info@westminsterwoods.ca
- Phone: +1 (604) 555-0123

---

**Built for Westminster Woods Community | 2024**
