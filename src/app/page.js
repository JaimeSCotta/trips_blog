'use client'; // Para habilitar el uso de hooks (si los necesitaras, como para Firebase)

/* React y otros imports */
import React, { useEffect } from 'react';
import { auth } from '../firebase'; // Si estás usando Firebase

// Importar el CSS global
import 'globals.css';

const HomePage = () => {

  useEffect(() => {
    // Aquí va la lógica para cargar el estado de Firebase, por ejemplo:
    // Verificar si el usuario está autenticado, cargar los viajes, etc.
  }, []);

  return (
    <div className="body-main">
      <header className="site-header bg-gray-800 text-white fixed top-0 left-0 w-full z-10">
        <div className="wrapper site-header__wrapper flex justify-between items-center w-full p-2">
          
          {/* Botón de hamburguesa */}
          <div className="nav-left">
            <button className="hamburger text-xl text-white bg-transparent border-none cursor-pointer" id="openSidebar" aria-label="Abrir barra lateral" type="button">
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* Navegación principal (centrada) */}
          <nav className="nav nav-center flex justify-center flex-1">
            <ul className="flex space-x-5">
              <li><a href="/" className="text-white text-lg">Home</a></li>
              <li><a href="#" id="favoritesLink" className="text-white text-lg">Favorites</a></li>
            </ul>
          </nav>

          {/* Imagen de "Sign In" */}
          <div className="auth-container flex items-center justify-end">
            <img id="loginIcon" src="img/sign_in.png" alt="Login" className="login-icon w-10 h-10 cursor-pointer" />
            <div id="dropdownMenu" className="dropdown hidden absolute mt-40 right-5 bg-blue-600 text-white p-3 rounded-lg">
              <p id="userNameDropdown" className="mb-2 text-left">Nombre Usuario</p>
              <button id="logoutBtn" className="text-white p-0 w-full text-left hover:bg-transparent focus:outline-none">
                <i className="fas fa-sign-out-alt"></i> Sign out
              </button>
              <button id="deleteUserBtn" className="delete-account-btn text-white w-full text-left hover:bg-transparent focus:outline-none">
                <i className="fas fa-user-times"></i> Delete account
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Barra lateral izquierda con todos los viajes */}
      <div id="sidebar" className="sidebar">
        <button className="hamburger text-xl text-white bg-transparent border-none cursor-pointer" id="sidebarHamburger" aria-label="Abrir barra lateral" type="button">
          <i className="fas fa-bars"></i>
        </button>
        <button id="closeSidebar" className="close-btn text-3xl text-white absolute top-5 right-5" type="button">&times;</button>
        <ul>
          {/* Aquí iría contenido dinámico como una lista de viajes */}
        </ul>
      </div>

      {/* Contenido Principal */}
      <main className="main">
        <section className="main_trips"></section>
        <div className="favorites-container"></div>
      </main>

      {/* Footer */}
      <footer className="footer-main bg-gray-800 text-white p-4 text-center">
        <p>© 2024 Blog de Viajes</p>
      </footer>

      {/* Modal personalizado de bienvenida */}
      <div id="welcomeModal" className="modal">
        <div className="modal-content">
          <span className="close-modal">&times;</span>
          <h2>Bienvenido, <span id="userName"></span>!</h2>
          <p>Estamos felices de tenerte de vuelta.</p>
        </div>
      </div>

      {/* Modal para Login */}
      <div id="authModal" className="modal">
        <div className="modal-content">
          <span className="close-modal">&times;</span>
          <h2>Login</h2>
          <div id="login-banner" className="banner-message">
            <p>Want to use favorites functionality? Sign in down here!</p>
          </div>
          <div className="input-icon">
            <i className="fa fa-envelope"></i>
            <input type="email" id="email" placeholder="Email ID" required />
          </div>
          <div className="input-icon">
            <i className="fa fa-lock"></i>
            <input type="password" id="password" placeholder="Password" required />
          </div>
          <div className="checkbox-container remember-checkbox">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#" id="forgot-password" className="forgot-password">Forgot Password?</a>
          </div>
          <button id="signInBtn" className="bg-blue-500 text-white py-2 px-4 rounded">Sign In</button>
          <p className="signup-link">Not registered? <a href="#" id="signUpBtn">Sign Up!</a></p>
        </div>
      </div>

      {/* Modal para Sign Up */}
      <div id="signUpModal" className="modal">
        <div className="modal-content">
          <span className="close-modal">&times;</span>
          <h2>Sign Up</h2>
          <div className="input-icon">
            <i className="fa fa-envelope"></i>
            <input type="email" id="newEmail" placeholder="New Email ID" required />
          </div>
          <div className="input-icon">
            <i className="fa fa-lock"></i>
            <input type="password" id="newPassword" placeholder="New Password" required />
          </div>
          <button id="registerBtn" className="bg-blue-500 text-white py-2 px-4 rounded">Register</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;