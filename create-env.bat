@echo off
echo Creating environment file...
echo DATABASE_URL="postgresql://postgres:YOUR_ACTUAL_PASSWORD_HERE@db.kvlohzjxaxfxqtgiynhg.supabase.co:5432/postgres" > .env
echo DATABASE_URL="postgresql://postgres:YOUR_ACTUAL_PASSWORD_HERE@db.kvlohzjxaxfxqtgiynhg.supabase.co:5432/postgres" > .env.local
echo Environment files created!
echo.
echo IMPORTANT: Replace YOUR_ACTUAL_PASSWORD_HERE with your real Supabase password
echo.
pause