# PDF-Manager 
The PDF Management & Collaboration System is a web application designed to simplify the
management and collaboration of PDF files. It provides users with the ability to securely upload,
share, and collaborate on PDF documents. The system ensures easy access to shared files,
facilitates commenting and discussions, and prioritizes data privacy and security. This PRD
outlines the features, functionality, and specifications of the application.

## Features

### User Signup and Authentication:
Users can create an account by providing essential information such as name,
email address, and password.

### File Upload:
Authenticated users can upload a PDF file to the system. The PDF files are securely stored 
and accessible only to authorized users. The application should validate the uploaded files to ensure 
they are in PDF format.

### Dashboard:
Users are able to see the list of uploaded files which they have access to. Clicking on it will take them to a specific pdf file.

### Commenting:
Authenticated Users are able to add comments and see the comments.

### Security and Data Privacy:
Only authorized users can access PDF files and comments.

### User Interface and Design:
The application has an intuitive and user-friendly interface. It provides a clear navigation, PDF file preview, and easy-to-use
commenting features.

## Future:

### File Sharing:
Users should have the ability to share PDF files with authenticated users and this can be done by generating unique links.

### Concurrent File Editing:
The PDF file should be available to shared users and all the users can concurrently access and edit the shared files.

## Technologies Used:

Frontend - ReactJS
Backend - Flask

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
