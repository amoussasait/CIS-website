# CISS Committee Management System

A secure, full-featured committee management system for the CISS Board of Directors.

## Features

### Authentication
- Secure login with username (email) and password
- Password hashing with bcrypt
- Session management with NextAuth.js
- Protected dashboard routes

### Meeting Minutes
- Create and manage meeting minutes
- Upload from Word documents (copy/paste)
- View and edit past minutes
- Search functionality
- Track who created each minute

### Task & Project Management
- Create and assign tasks to committee members
- Set due dates and priorities (Low, Medium, High)
- Track status: Pending, In Progress, Completed, Blocked
- Add comments/notes to tasks
- Filter by status and assignee
- Email notifications when tasks are assigned
- Due date reminders

### Agenda Management
- Propose agenda items (tracked by who submitted)
- Review all proposed items
- Create agendas from proposed items
- Send agendas to all committee members via email
- Track agenda history
- See who proposed each item

### Email Notifications
- Task assignment notifications
- Due date reminders
- Agenda distribution
- All emails sent from info@cissociety.ca
- Queued system with retry logic

## Getting Started

### 1. Database Setup

The database is already initialized with all committee members!

Location: `data/ciss-committee.db`

To reset the database (if needed):
```bash
# Delete the database file
# Windows:
del data\ciss-committee.db

# Then re-run setup
npx tsx scripts/setup-db.ts
```

### 2. Default Login Credentials

**All committee members can log in with:**
- Username: Their email address
- Password: `CISS2026!`

**Committee members:**
1. Omar El-Hajjar (o.elhajjar@muslimscalgary.ca)
2. Ramy Elhamalawy (ramyelhamalawy@prrd8.ca)
3. Moussa Ouarou (MoussaOuarou@prrd8.ca)
4. Abdulrahman Abbas (a.abbas@muslimscalgary.ca)
5. Dr. M. Abdel-Hafez (dr.m.hafez@gmail.com)
6. Marwa Ajram (marwaajram3@gmail.com)
7. Medina Desouki Khalaf (medinakalaf@gmail.com)
8. Basir (basir.saleh@aecom.com)
9. Ali Moussa (ali.moussa@shaw.ca) - **Admin**
10. Hoda Kilani (rightcareerfit@shaw.ca)
11. Mohamed Zohiri (m.zohiri@outlook.com)
12. Z Ahmad (z.ahmad@muslimscalgary.ca)
13. CISS Society (info@cissociety.ca)

**IMPORTANT:** Users should change their password on first login!

### 3. Running the Application

```bash
# Development mode
npm run dev

# Access at http://localhost:3000
# Login page: http://localhost:3000/login
# Dashboard: http://localhost:3000/dashboard
```

### 4. Email Configuration (Optional)

To enable email notifications, add to `.env.local`:

```env
SMTP_HOST="your-smtp-server.com"
SMTP_PORT="587"
SMTP_USER="your-email@domain.com"
SMTP_PASSWORD="your-password"
SMTP_FROM="info@cissociety.ca"
```

**Common SMTP providers:**
- Gmail: smtp.gmail.com (use App Password)
- Outlook: smtp.office365.com
- SendGrid, Mailgun, etc.

**Process email queue:**
```bash
npx tsx scripts/process-emails.ts
```

You can set up a cron job to run this periodically for automated emails.

### 5. Deploying to Production

**Important steps for deployment:**

1. **Generate a secure NextAuth secret:**
```bash
openssl rand -base64 32
```

2. **Update `.env.local` for production:**
```env
NEXTAUTH_SECRET="your-generated-secret-here"
NEXTAUTH_URL="https://your-domain.com"
```

3. **Deploy to Vercel:**
   - The database file (`data/ciss-committee.db`) will be included
   - Add environment variables in Vercel dashboard
   - Configure SMTP for email notifications

4. **For Vercel deployment:**
   - The SQLite database works on Vercel but is read-only after deployment
   - For production, consider upgrading to Vercel Postgres or another hosted database
   - Or use a serverless-friendly approach with file-system write permissions

## Usage Guide

### For Committee Members

1. **Login:** Go to `/login` and use your email and default password
2. **Dashboard:** View overview of tasks, minutes, and agenda items
3. **My Tasks:** See tasks assigned to you
4. **Propose Agenda Items:** Submit items for upcoming meetings
5. **View Minutes:** Access past meeting records

### For Administrators

All features above, plus:

1. **Create Meeting Minutes:**
   - Go to Dashboard → Meeting Minutes → Add Minutes
   - Copy/paste from Word documents
   - All members can view

2. **Create & Assign Tasks:**
   - Go to Dashboard → Tasks → New Task
   - Assign to specific members
   - Set due dates and priorities
   - Add comments for collaboration
   - Email sent automatically to assignee

3. **Create Agendas:**
   - Review proposed agenda items
   - Go to Dashboard → Agenda → Create Agenda
   - Select items to include
   - Write full agenda content
   - Send to all members with one click

4. **Manage Committee:**
   - All activity is logged
   - Track who did what and when

## File Structure

```
ciss-website/
├── app/
│   ├── api/                    # API routes
│   │   ├── auth/              # NextAuth handlers
│   │   ├── minutes/           # Meeting minutes CRUD
│   │   ├── tasks/             # Task management CRUD
│   │   ├── agenda-items/      # Agenda item proposals
│   │   ├── agendas/           # Agenda creation & sending
│   │   └── users/             # User management
│   ├── dashboard/             # Protected dashboard
│   │   ├── minutes/           # Minutes management UI
│   │   ├── tasks/             # Task management UI
│   │   └── agenda/            # Agenda management UI
│   └── login/                 # Login page
├── components/
│   └── dashboard-nav.tsx      # Dashboard navigation
├── lib/
│   ├── auth.ts                # NextAuth configuration
│   ├── db.ts                  # Database utilities
│   └── email.ts               # Email utilities
├── scripts/
│   ├── setup-db.ts            # Database initialization
│   └── process-emails.ts      # Email queue processor
├── data/
│   └── ciss-committee.db      # SQLite database
└── .env.local                 # Environment variables
```

## Security Features

✅ Password hashing with bcrypt
✅ Secure session management
✅ Protected API routes
✅ SQL injection prevention (prepared statements)
✅ No plain-text passwords stored
✅ Activity logging for audit trail

## Database Schema

**Tables:**
- `users` - Committee members with hashed passwords
- `meeting_minutes` - Meeting records
- `tasks` - Task/project management
- `task_comments` - Comments on tasks
- `agenda_items` - Proposed agenda items
- `agendas` - Created meeting agendas
- `agenda_item_mappings` - Links items to agendas
- `activity_log` - Audit trail
- `email_queue` - Pending email notifications

## Backup & Maintenance

### Backup Database
```bash
# Simple file copy
copy data\ciss-committee.db data\backups\ciss-committee-backup-2026-01-15.db
```

### View Database
You can use any SQLite viewer:
- DB Browser for SQLite (free, recommended)
- SQLiteStudio
- Or VS Code with SQLite extension

### Add New Committee Members
```bash
# Run the database setup script
# Edit scripts/setup-db.ts to add new members
# Then run:
npx tsx scripts/setup-db.ts
```

## Troubleshooting

**Issue: Can't log in**
- Check email is correct
- Default password is `CISS2026!`
- Check browser console for errors

**Issue: Database locked**
- Stop the dev server
- Restart with `npm run dev`

**Issue: Emails not sending**
- Check SMTP configuration in `.env.local`
- Run `npx tsx scripts/process-emails.ts` manually
- Check email_queue table for errors

**Issue: Page not loading**
- Check browser console
- Check terminal for build errors
- Try clearing browser cache

## Support

For issues or questions:
1. Check this README
2. Review error messages in browser console
3. Check server logs in terminal
4. Contact the system administrator

## Future Enhancements

Possible additions:
- File attachments for minutes and tasks
- Calendar view for meetings and tasks
- Email digest (weekly summary)
- Export reports (PDF, Excel)
- Mobile-responsive improvements
- Password reset functionality
- User profile management
- Advanced search and filters

## License

Internal use for CISS Committee only.
