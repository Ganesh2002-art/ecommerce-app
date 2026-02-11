About

This project is a mobile e-commerce app built with React Native. It provides a complete shopping experience:

User authentication (login/signup)

Browse products and view details

Add products to cart and checkout

Manage user profile and orders

Smooth navigation and state management using Redux

Features

Splash screen and authentication flow

Home screen with product listings and search

Product details with add-to-cart functionality

Cart management and multi-step checkout

Profile screen to manage user info

Skeleton loading for better UX

Modular and reusable components

Technologies Used

Frontend: React Native, React Navigation

State Management: Redux Toolkit

Backend Communication: Axios (API service layer)

Styling: React Native Stylesheets / Custom Components

Other Libraries: AsyncStorage, Redux Persist, React Native Vector Icons

Project Structure
ecommerce-app/
│
├── App.js                  # Entry point of the app
├── package.json            # Project dependencies
│
├── src/
│   ├── assets/             # Images, icons, and other static assets
│   │   └── images/
│
│   ├── constants/          # App-wide constants
│   │   └── colors.js
│
│   ├── components/         # Reusable UI components
│   │   ├── CustomButton.js
│   │   ├── InputField.js
│   │   ├── ProductCard.js
│   │   └── ProductSkeleton.js
│
│   ├── screens/            # App screens organized by feature
│   │   ├── auth/           # Authentication flow
│   │   │   ├── SplashScreen.js
│   │   │   ├── LoginScreen.js
│   │   │   └── SignupScreen.js
│   │   │
│   │   ├── home/           # Home & product details
│   │   │   ├── HomeScreen.js
│   │   │   └── ProductDetailsScreen.js
│   │   │
│   │   ├── cart/           # Cart and checkout flow
│   │   │   ├── CartScreen.js
│   │   │   ├── CheckoutShipping.js
│   │   │   ├── CheckoutPayment.js
│   │   │   └── OrderSuccess.js
│   │   │
│   │   └── profile/        # User profile
│   │       └── ProfileScreen.js
│
│   ├── navigation/         # App navigation setup
│   │   ├── AppNavigator.js
│   │   ├── AuthNavigator.js
│   │   └── MainTabNavigator.js
│
│   ├── redux/              # Redux store and slices
│   │   ├── store.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── productSlice.js
│   │       └── cartSlice.js
│
│   └── services/           # API service layer
│       └── api.js

Installation

Prerequisites:

Node.js & npm/yarn installed

React Native CLI or Expo CLI

Android Studio / Xcode for simulators

Steps:
create expo app:

npx create-expo-app ecommerce-app


Clone the repository:

git clone https://github.com/Ganesh2002-art/ecommerce-app.git


Navigate to the project directory:

cd ecommerce-app


Install dependencies:

npm install
# or
yarn install


Run the app:

For Android:

npx react-native run-android


For iOS:

npx react-native run-ios


Configure API endpoints in src/services/api.js.

Usage

Open the app on your simulator or device

Sign up or log in

Browse products on the Home screen

Add products to your cart

Proceed with checkout (shipping → payment → order success)

Manage profile and view past orders

Screenshots
Splash Screen	Home Screen	Cart Screen

	
	
Contributing

Contributions are welcome!

Fork the repository

Create a new branch: git checkout -b feature-name

Commit your changes: git commit -m "Add feature"

Push to the branch: git push origin feature-name

Open a Pull Request

License

This project is licensed under the MIT License.

Contact

Devana Siva Naga Ganesh Babi – babidevana49@gmail.com

GitHub: https://github.com/Ganesh2002-art/ecommerce-app.git
