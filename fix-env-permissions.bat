@echo off
echo === RUNNING PRISMA WITH TEMPORARY ENV VARIABLE ===
echo.

set /p DB_PASSWORD="Enter your Supabase password: "

set DATABASE_URL=postgresql://postgres:%DB_PASSWORD%@db.kvlohzjxaxfxqtgiynhg.supabase.co:5432/postgres

echo.
echo Running Prisma with environment variable...
npx prisma db push

echo.
echo If successful, your database is now set up!
pause