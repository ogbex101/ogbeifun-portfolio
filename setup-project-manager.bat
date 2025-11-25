@echo off
echo Setting up Project Manager with Image Uploads...

REM Create necessary directories
mkdir src\app\admin 2>nul
mkdir src\app\api\projects 2>nul
mkdir src\components\admin 2>nul
mkdir public\project-images 2>nul
mkdir uploads 2>nul

REM Create Admin Page
echo Creating admin page...
type nul > src\app\admin\page.tsx

REM Create API routes
echo Creating API routes...
type nul > src\app\api\projects\route.ts
type nul > src\app\api\upload\route.ts

REM Create Admin Components
echo Creating admin components...
type nul > src\components\admin\ProjectForm.tsx
type nul > src\components\admin\ImageUpload.tsx

REM Create Enhanced Project Components
echo Creating enhanced project components...
type nul > src\components\ProjectCardWithImages.tsx
type nul > src\components\ImageCarousel.tsx

echo File structure created successfully!
echo.
echo Next steps:
echo 1. I will provide the code for each file
echo 2. Run: npx prisma db push
echo 3. Run: npm run dev
echo 4. Visit: http://localhost:3000/admin
echo.
pause