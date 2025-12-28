// --- SECURE CONFIGURATION ---
    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL BELOW
    const PROXY_URL = "https://script.google.com/macros/s/AKfycbzCPWOU5HdAV5iGBtqo5Hk_-wd4qmfyjWhRYMBX0OtQV2yVwGuTXkRhvNn0y3z_KjB85Q/exec"; 

    // AUTH & LOGGING URLS (KEPT UNCHANGED)
    const AUTH_HISTORY_URL = "https://script.google.com/macros/s/AKfycbySBTZu6C07EXu-rRdIQalDgKX89e_WBL45F8SvyWc8sdgZCkDwuiyHTkhq0IqQJnvAdw/exec";    
    const TRANSLATION_LOGGER_URL = "https://script.google.com/macros/s/AKfycbzT63NZk9nuXWTYR7B78hpKflG1wgLVeFrPM5AD6b9KfGgepgVutmdMy3PdPMB-5BkD/exec";    

    // Language data (unchanged)
    const languages = [
        { name: "Abkhaz", value: "Abkhaz" }, { name: "Acehnese", value: "Acehnese" }, { name: "Acholi", value: "Acholi" }, { name: "Afar", value: "Afar" }, { name: "Afrikaans", value: "Afrikaans" }, { name: "Albanian", value: "Albanian" }, { name: "Alur", value: "Alur" }, { name: "Amharic", value: "Amharic" }, { name: "Arabic", value: "Arabic" }, { name: "Armenian", value: "Armenian" }, { name: "Assamese", value: "Assamese" }, { name: "Avar", value: "Avar" }, { name: "Awadhi", value: "Awadhi" }, { name: "Aymara", value: "Aymara" }, { name: "Azerbaijani", value: "Azerbaijani" }, { name: "Balinese", value: "Balinese" }, { name: "Baluchi", value: "Baluchi" }, { name: "Bambara", value: "Bambara" }, { name: "Baoulé", value: "Baoulé" }, { name: "Bashkir", value: "Bashkir" }, { name: "Basque", value: "Basque" }, { name: "Batak Karo", value: "Batak Karo" }, { name: "Batak Simalungun", value: "Batak Simalungun" }, { name: "Batak Toba", value: "Batak Toba" }, { name: "Belarusian", value: "Belarusian" }, { name: "Bemba", value: "Bemba" }, { name: "Bengali", value: "Bengali" }, { name: "Betawi", value: "Betawi" }, { name: "Bhojpuri", value: "Bhojpuri" }, { name: "Bikol", value: "Bikol" }, { name: "Bosnian", value: "Bosnian" }, { name: "Breton", value: "Breton" }, { name: "Bulgarian", value: "Bulgarian" }, { name: "Buryat", value: "Buryat" }, { name: "Cantonese", value: "Cantonese" }, { name: "Catalan", value: "Catalan" }, { name: "Cebuano", value: "Cebuano" }, { name: "Chamorro", value: "Chamorro" }, { name: "Chechen", value: "Chechen" }, { name: "Chewa", value: "Chewa" }, { name: "Chinese (Simplified)", value: "Chinese (Simplified)" }, { name: "Chinese (Traditional)", value: "Chinese (Traditional)" }, { name: "Chuukese", value: "Chuukese" }, { name: "Chuvash", value: "Chuvash" }, { name: "Corsican", value: "Corsican" }, { name: "Crimean Tatar (Cyrillic)", value: "Crimean Tatar (Cyrillic)" }, { name: "Crimean Tatar (Latin)", value: "Crimean Tatar (Latin)" }, { name: "Croatian", value: "Croatian" }, { name: "Czech", value: "Czech" }, { name: "Danish", value: "Danish" }, { name: "Dari", value: "Dari" }, { name: "Dhivehi", value: "Dhivehi" }, { name: "Dinka", value: "Dinka" }, { name: "Dogri", value: "Dogri" }, { name: "Dombe", value: "Dombe" }, { name: "Dutch", value: "Dutch" }, { name: "Dyula", value: "Dyula" }, { name: "Dzongkha", value: "Dzongkha" }, { name: "English", value: "English" }, { name: "Esperanto", value: "Esperanto" }, { name: "Estonian", value: "Estonian" }, { name: "Ewe", value: "Ewe" }, { name: "Faroese", value: "Faroese" }, { name: "Fijian", value: "Fijian" }, { name: "Filipino", value: "Filipino" }, { name: "Finnish", value: "Finnish" }, { name: "Fon", value: "Fon" }, { name: "French", value: "French" }, { name: "French (Canada)", value: "French (Canada)" }, { name: "Frisian", value: "Frisian" }, { name: "Friulian", value: "Friulian" }, { name: "Fulani", value: "Fulani" }, { name: "Ga", value: "Ga" }, { name: "Galician", value: "Galician" }, { name: "Georgian", value: "Georgian" }, { name: "German", value: "German" }, { name: "Greek", value: "Greek" }, { name: "Guarani", value: "Guarani" }, { name: "Gujarati", value: "Gujarati" }, { name: "Haitian Creole", value: "Haitian Creole" }, { name: "Hakha Chin", value: "Hakha Chin" }, { name: "Hausa", value: "Hausa" }, { name: "Hawaiian", value: "Hawaiian" }, { name: "Hebrew", value: "Hebrew" }, { name: "Hiligaynon", value: "Hiligaynon" }, { name: "Hindi", value: "Hindi" }, { name: "Hmong", value: "Hmong" }, { name: "Hungarian", value: "Hungarian" }, { name: "Hunsrik", value: "Hunsrik" }, { name: "Iban", value: "Iban" }, { name: "Icelandic", value: "Icelandic" }, { name: "Igbo", value: "Igbo" }, { name: "Ilocano", value: "Ilocano" }, { name: "Indonesian", value: "Indonesian" }, { name: "Inuktut (Latin)", value: "Inuktut (Latin)" }, { name: "Inuktut (Syllabics)", value: "Inuktut (Syllabics)" }, { name: "Irish", value: "Irish" }, { name: "Italian", value: "Italian" }, { name: "Japanese", value: "Japanese" }, { name: "Javanese", value: "Javanese" }, { name: "Kannada", value: "Kannada" }, { name: "Kazakh", value: "Kazakh" }, { name: "Khmer", value: "Khmer" }, { name: "Kinyarwanda", value: "Kinyarwanda" }, { name: "Konkani", value: "Konkani" }, { name: "Korean", value: "Korean" }, { name: "Kurdish (Kurmanji)", value: "Kurdish (Kurmanji)" }, { name: "Kurdish (Sorani)", value: "Kurdish (Sorani)" }, { name: "Lao", value: "Lao" }, { name: "Latvian", value: "Latvian" }, { name: "Lithuanian", value: "Lithuanian" }, { name: "Lombard", value: "Lombard" }, { name: "Malay", value: "Malay" }, { name: "Malayalam", value: "Malayalam" }, { name: "Maltese", value: "Maltese" }, { name: "Maori", value: "Maori" }, { name: "Marathi", value: "Marathi" }, { name: "Mongolian", value: "Mongolian" }, { name: "Nepali", value: "Nepali" }, { name: "Norwegian", value: "Norwegian" }, { name: "Odia (Oriya)", value: "Odia (Oriya)" }, { name: "Pashto", value: "Pashto" }, { name: "Persian", value: "Persian" }, { name: "Polish", value: "Polish" }, { name: "Portuguese", value: "Portuguese" }, { name: "Punjabi (Gurmukhi)", value: "Punjabi (Gurmukhi)" }, { name: "Punjabi (Shahmukhi)", value: "Punjabi (Shahmukhi)" }, { name: "Romanian", value: "Romanian" }, { name: "Russian", value: "Russian" }, { name: "Serbian", value: "Serbian" }, { name: "Sinhala", value: "Sinhala" }, { name: "Slovak", value: "Slovak" }, { name: "Slovenian", value: "Slovenian" }, { name: "Somali", value: "Somali" }, { name: "Spanish", value: "Spanish" }, { name: "Sundanese", value: "Sundanese" }, { name: "Swahili", value: "Swahili" }, { name: "Swedish", value: "Swedish" }, { name: "Tagalog (Filipino)", value: "Tagalog (Filipino)" }, { name: "Tamil", value: "Tamil" }, { name: "Tatar", value: "Tatar" }, { name: "Telugu", value: "Telugu" }, { name: "Thai", value: "Thai" }, { name: "Tibetan", value: "Tibetan" }, { name: "Tigrinya", value: "Tigrinya" }, { name: "Tswana", value: "Tswana" }, { name: "Turkish", value: "Turkish" }, { name: "Turkmen", value: "Turkmen" }, { name: "Ukrainian", value: "Ukrainian" }, { name: "Urdu", value: "Urdu" }, { name: "Uyghur", value: "Uyghur" }, { name: "Uzbek", value: "Uzbek" }, { name: "Vietnamese", value: "Vietnamese" }, { name: "Welsh", value: "Welsh" }, { name: "Xhosa", value: "Xhosa" }, { name: "Yiddish", value: "Yiddish" }, { name: "Yoruba", value: "Yoruba" }, { name: "Zulu", value: "Zulu" }
    ];

    // DOM elements
    const body = document.body;
    const inputTextA = document.getElementById('inputTextA');
    const inputTextB = document.getElementById('inputTextB');
    const langA = document.getElementById('langA');
    const langB = document.getElementById('langB');
    const labelA = document.getElementById('labelA');
    const labelB = document.getElementById('labelB');
    const definitionContent = document.getElementById('definitionContent');
    const similarWordsContent = document.getElementById('similarWordsContent');
    const imageResults = document.getElementById('imageResults');    
    const authContainer = document.getElementById('authContainer');
    const authMessage = document.getElementById('authMessage');
    const accountStatus = document.getElementById('accountStatus');
    const historyListContainer = document.getElementById('historyListContainer');
    const historyStatus = document.getElementById('historyStatus');
    const clearHistoryButton = document.getElementById('clearHistoryButton');
    const sourcesDiv = document.getElementById('sources');
    const sourceList = document.getElementById('sourceList');
    const speakButtonA = document.getElementById('speakButtonA');
    const speakButtonB = document.getElementById('speakButtonB');
    const speakButtonDef = document.getElementById('speakButtonDef');
    const speakButtonSimilarWords = document.getElementById('speakButtonSimilarWords');
    const darkModeToggle = document.getElementById('darkModeToggle');
    const voiceSelect = document.getElementById('voiceSelect');
    const sidebar = document.getElementById('sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const translateButton = document.getElementById('translateButton');

    // State variables
    let audioPlayer = null;    
    let isTranslating = false;    
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;    
    let ttsVoice = localStorage.getItem('ttsVoice') || 'Orus';    
    // Global history tracking
    let currentHistoryData = [];
    let originalHistoryData = [];
    
    // Global variable for the Web Speech API synth object
    const nativeSynth = window.speechSynthesis;


    // --- Settings & UI Management ---

    window.toggleSidebar = function() {
        sidebar.classList.toggle('open');
        sidebarBackdrop.classList.toggle('open');
    }

    window.openSettingsModal = function() {
        // Load current settings into the modal
        darkModeToggle.checked = body.classList.contains('dark');
        voiceSelect.value = ttsVoice;
        document.getElementById('settingsModal').classList.remove('hidden');
    }

    function toggleDarkMode(isDark) {
        if (isDark) {
            body.classList.add('dark');
            body.classList.remove('light');
            localStorage.setItem('darkMode', 'true');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            localStorage.setItem('darkMode', 'false');
        }
    }

    function setTTSVoice(voice) {
        ttsVoice = voice;
        localStorage.setItem('ttsVoice', voice);
    }

    // Fix for sidebar menu links that need to close the sidebar
    window.closeSidebarAndScroll = function(targetId) {
        toggleSidebar();
        // Wait for transition, then scroll
        setTimeout(() => {
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 300);
    }
    
    // --- Function to load all available browser voices into the select menu ---
    function loadAvailableVoices() {
        const voiceSelect = document.getElementById('voiceSelect');
        
        // Save current selection before clearing
        const savedVoice = voiceSelect.value;
        voiceSelect.innerHTML = ''; 

        // Get voices from the browser's native API
        const voices = nativeSynth.getVoices();

        voices.forEach(voice => {
            const option = document.createElement('option');
            // Display a user-friendly name and language/dialect
            option.textContent = `${voice.name} (${voice.lang})`; 
            option.value = voice.name; // Use the voice name as the value
            
            // Mark the default voice (if applicable)
            if (voice.default) {
                option.textContent += ' — DEFAULT';
            }

            voiceSelect.appendChild(option);
        });

        // Re-select the saved preference if it still exists in the new list
        if (savedVoice && voices.some(v => v.name === savedVoice)) {
            voiceSelect.value = savedVoice;
            setTTSVoice(savedVoice);
        } else if (voiceSelect.options.length > 0) {
            // Fallback: Use the first voice and save it as the new default preference
            setTTSVoice(voiceSelect.value);
        }
    }
    // CRITICAL STEP: Since getVoices() is loaded asynchronously, we listen for the voiceschanged event
    if (nativeSynth.onvoiceschanged !== undefined) {
        nativeSynth.onvoiceschanged = loadAvailableVoices;
    }
    // Call once immediately in case voices are already loaded
    loadAvailableVoices();


    // --- Core Fix: Language Selector Population and Update ---
    function populateLanguageSelectors() {
        langA.innerHTML = '';
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.value;
            option.textContent = lang.name;
            langA.appendChild(option);
        });
        langA.value = 'English';   

        langB.innerHTML = '';
        languages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang.value;
            option.textContent = lang.name;
            langB.appendChild(option);
        });
        langB.value = 'Tamil';   

        updateLabels();
    }
    
    function updateLabels() {
        if (langA.options[langA.selectedIndex]) {
            labelA.textContent = langA.options[langA.selectedIndex].text;
        }
        if (langB.options[langB.selectedIndex]) {
            labelB.textContent = langB.options[langB.selectedIndex].text;
        }
    }

    // NEW: Function to toggle password visibility
    window.togglePasswordVisibility = function(inputId, iconId) {
        const passwordInput = document.getElementById(inputId);
        const toggleIcon = document.getElementById(iconId);
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleIcon.classList.remove('fa-eye');
            toggleIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            toggleIcon.classList.remove('fa-eye-slash');
            toggleIcon.classList.add('fa-eye');
        }
    }


    // --- Auth & Modal Functions ---
    
    // NEW: Function to close modal if backdrop (but not content) is clicked
    window.closeModalOnBackdrop = function(event, modalId) {
        if (event.target.classList.contains('modal-backdrop')) {
            closeModal(modalId);
        }
    }

    window.renderAuthView = function(view) {
        authMessage.textContent = '';
        
        if (currentUser) {
            view = 'status';
        }

        let html = '';
        let title = '';

        const inputClasses = "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition-all duration-300";
        const buttonPrimaryClasses = "w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-150 shadow-md";
        const buttonSecondaryClasses = "text-indigo-600 font-medium hover:underline transition duration-150";

       switch (view) {
            case 'login':
                title = 'Log In to LexiVerse';
                html = `
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">${title}</h2>
                    <form onsubmit="handleLogin(event)" class="space-y-4">
                        <input type="email" id="loginEmail" placeholder="Gmail Address" required class="${inputClasses}">
                        <div class="relative">
                            <input type="password" id="loginPassword" placeholder="Password" required class="${inputClasses} pr-12">
                            <button type="button" onclick="togglePasswordVisibility('loginPassword', 'loginEyeIcon')" class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-indigo-600 transition">
                                <i id="loginEyeIcon" class="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        <button type="submit" class="${buttonPrimaryClasses}">
                            Log In
                        </button>
                       <p class="text-center text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            Don't have an account? <button type="button" onclick="renderAuthView('signup')" class="${buttonSecondaryClasses}">Sign Up</button>
                       </p>
                    </form>
                `;
                break;

            case 'signup':
                title = 'Sign Up for LexiVerse';
                html = `
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">${title}</h2>
                    <form onsubmit="handleSignup(event)" class="space-y-4">
                        <input type="text" id="signupName" placeholder="Full Name" required class="${inputClasses}">
                        <input type="email" id="signupEmail" placeholder="Gmail Address" required class="${inputClasses}">
                        <div class="relative">
                            <input type="password" id="signupPassword" placeholder="Password (Min 6 characters)" required class="${inputClasses} pr-12">
                            <button type="button" onclick="togglePasswordVisibility('signupPassword', 'signupEyeIcon')" class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 hover:text-green-600 transition">
                                <i id="signupEyeIcon" class="fa-solid fa-eye"></i>
                            </button>
                        </div>
                        <button type="submit" class="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-150 shadow-md">
                            Sign Up
                        </button>
                       <p class="text-center text-sm text-gray-700 dark:text-gray-300 whitespace-nowrap">
                            Already have account! <button type="button" onclick="renderAuthView('login')" class="${buttonSecondaryClasses}">Log In</button>
                       </p>
                    </form>
                `;
                break;
            
            case 'status':
                title = 'Account Status';
                html = `
                    <h2 class="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">${title}</h2>
                    <div class="space-y-3">
                        <p class="text-gray-700 dark:text-gray-300 font-medium">Logged in as:</p>
                        <p class="bg-indigo-50 dark:bg-indigo-900 p-3 rounded-lg font-semibold text-indigo-700 dark:text-indigo-300">
                            <svg class="inline w-5 h-5 mr-1 align-sub" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            ${currentUser.email}
                        </p>
                        <p class="text-gray-500 dark:text-gray-400">Your translation history is saved.</p>
                        <button onclick="handleLogout()" class="w-full mt-4 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-150 shadow-md">
                            Log Out
                        </button>
                    </div>
                `;
                break;
        }

        authContainer.innerHTML = html;
    }

    window.openAccountModal = function() {
        window.renderAuthView(currentUser ? 'status' : 'login');    
        document.getElementById('accountModal').classList.remove('hidden');
    }

    window.closeModal = function(modalId) {
        document.getElementById(modalId).classList.add('hidden');
        window.renderAuthView(currentUser ? 'status' : 'login');    
    }
    
    function updateAccountStatus() {
      if (currentUser) {
          const displayName = currentUser.name  
                                     ? currentUser.name.split(' ')[0] 
                                     : currentUser.email.split('@')[0];
          
          accountStatus.textContent = `Logged in (${displayName})`;
          accountStatus.classList.add('text-green-600');
          accountStatus.classList.remove('text-gray-600');
          
      } else {
          accountStatus.textContent = 'Account';
          accountStatus.classList.remove('text-green-600');
          accountStatus.classList.add('text-gray-600');
      }
    }
    
    // --- Auth Logic (Updated to use server-side endpoints for logging) ---

    async function sendAuthRequest(action, data) {
        if (!AUTH_HISTORY_URL || AUTH_HISTORY_URL.includes("YOUR_AUTH_HISTORY_APPSCRIPT_URL_HERE")) {
            authMessage.textContent = "Error: AUTH_HISTORY_URL is not configured.";
            return { success: false };
        }

        authMessage.textContent = 'Processing...';

        const formData = new FormData();
        formData.append("action", action);
        for (const key in data) {
            formData.append(key, data[key]);
        }

        try {
            const response = await fetch(AUTH_HISTORY_URL, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            
            const result = await response.json();
            return result;

        } catch (error) {
            authMessage.textContent = `Network Error: ${error.message}`;
            return { success: false };
        }
    }


    window.handleSignup = async function(event) {
        event.preventDefault();
        
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const password = document.getElementById('signupPassword').value;
        
        if (!email.endsWith('@gmail.com')) {
            authMessage.textContent = "Please use a valid Gmail address for sign up.";
            showCustomToast("Invalid Email Format", 'error', 4000);
            return;
        }
        if (password.length < 6) {
            authMessage.textContent = "Password must be at least 6 characters.";
            showCustomToast("Password too short", 'error', 4000);
            return;
        }
        
        const result = await sendAuthRequest('signup', { name, email, password });

        if (result.success) {
            currentUser = { email: email, name: name };
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAccountStatus();
            closeModal('accountModal');
            showCustomToast(`Welcome, ${name}! You are now logged in.`, 'success');    
            
        } else {
            const errorMessage = result.message || "Sign up failed.";
            authMessage.textContent = errorMessage; 
            showCustomToast("Signup Failed: " + errorMessage, 'error', 5000);    
        }
    }

    window.handleLogin = async function(event) {
        event.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;

        const result = await sendAuthRequest('login', { email, password });

        if (result.success) {
            currentUser = result.user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            updateAccountStatus();
            closeModal('accountModal');
            showCustomToast(`Welcome back, ${result.user.name || 'User'}!`, 'success');

        } else {
            const errorMessage = result.message || "Login failed. Check your email and password.";
            authMessage.textContent = errorMessage;
            showCustomToast("Login Failed. Check credentials.", 'error', 5000);
        }
    }

    window.handleLogout = function() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateAccountStatus();
        closeModal('accountModal');
        showCustomToast("You have been logged out.", 'logout');
    }

    // --- Custom Toast Notification Handler ---

    function showCustomToast(message, type, duration = 4000) {
        const toast = document.getElementById('statusToast');
        const toastMessage = document.getElementById('toastMessage');
        const toastIcon = document.getElementById('toastIcon');
        if (!toast || !toastMessage || !toastIcon) return; 

        toast.className = 'fixed bottom-5 left-1/2 transform -translate-x-1/2 p-4 rounded-lg shadow-2xl z-[1000] min-w-[300px] text-center opacity-0 transition-all duration-300 pointer-events-none';
        toastIcon.innerHTML = '';
        
        let iconHtml = '';
        let typeClass = '';

        if (type === 'success') {
            typeClass = 'toast-success';
            iconHtml = '<svg class="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'; 
        } else if (type === 'logout') {
            typeClass = 'toast-logout';
            iconHtml = '<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>';
        } else if (type === 'error') {
            typeClass = 'toast-error';
            iconHtml = '<svg class="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
        }

        toastMessage.textContent = message;
        toastIcon.innerHTML = iconHtml;
        
        toast.classList.add(typeClass, 'toast-visible');

        setTimeout(() => {
            toast.classList.remove('toast-visible');    
            toast.classList.add('opacity-0');
            
            setTimeout(() => {
                toast.classList.remove(typeClass);
                toast.classList.add('pointer-events-none');
            }, 500); 
        }, duration);
    }

    
    // --- History Functions ---

    function getHistory() {
        const historyKey = currentUser ? `lexiverseHistory_${currentUser.email}` : 'lexiverseHistory_guest';
        try {
            const history = JSON.parse(localStorage.getItem(historyKey)) || [];
             return history.map(item => ({
                ...item,
                definition: item.definition || 'No definition logged.',
                similarWords: item.similarWords || 'No similar words logged.',
                timestamp: new Date(item.timestamp).toISOString(), 
            }));
        } catch (e) {
            console.error("Error reading history from Local Storage:", e);
            return [];
        }
    }
 
    function saveToHistory(sourceText, targetText, translation) {
        if (sourceText.length === 0 || translation.length === 0) return;

        const sourceLangText = langA.options[langA.selectedIndex].text;
        const targetLangText = langB.options[langB.selectedIndex].text;

        const history = getHistory().map(item => ({
            ...item,    
            timestamp: new Date(item.timestamp).toLocaleString()
        })); 

        const newEntry = {
            source: sourceText,
            target: translation,
            sourceLang: sourceLangText,
            targetLang: targetLangText,
            timestamp: new Date().toLocaleString(), 
            definition: 'No definition logged.', 
            similarWords: 'No similar words logged.' 
        };

        const historyKey = currentUser ? `lexiverseHistory_${currentUser.email}` : 'lexiverseHistory_guest';

        history.unshift(newEntry);
        if (history.length > 50) {
            history.pop();
        }

        try {
            localStorage.setItem(historyKey, JSON.stringify(history));
        } catch (e) {
            console.error("Error writing history to Local Storage:", e);
        }
    }

    window.openClearHistoryConfirm = function() {
        document.getElementById('clearHistoryConfirmModal')?.classList.remove('hidden');
    }

    window.clearHistoryConfirmed = function() {
        if (typeof closeModal === 'function') {
            closeModal('clearHistoryConfirmModal');
        } else {
            document.getElementById('clearHistoryConfirmModal')?.classList.add('hidden');
        }

        const historyKey = currentUser ? `lexiverseHistory_${currentUser.email}` : 'lexiverseHistory_guest';
        
        localStorage.removeItem(historyKey);
        
        currentHistoryData = [];
        originalHistoryData = [];

        const clearHistoryButton = document.getElementById('clearHistoryButton');
        if (clearHistoryButton) {
            clearHistoryButton.classList.add('hidden');
        }

        openHistoryModal(); 
    }

    window.toggleReadMore = function(toggleId) {
        const hiddenContent = document.getElementById(`hidden-content-${toggleId}`);
        const toggleButton = document.getElementById(`read-more-btn-${toggleId}`);
        
        if (!hiddenContent || !toggleButton) return;

        if (hiddenContent.classList.contains('hidden')) {
            hiddenContent.classList.remove('hidden');
            const truncatedContainer = document.getElementById(`trunc-${toggleId}`);
            if(truncatedContainer) truncatedContainer.classList.add('hidden'); 
            toggleButton.textContent = 'Read Less';
        } else {
            hiddenContent.classList.add('hidden');
            const truncatedContainer = document.getElementById(`trunc-${toggleId}`);
            if(truncatedContainer) truncatedContainer.classList.remove('hidden'); 
            toggleButton.textContent = 'Read More...';
        }
    }

    function isOlderThanTwoDays(isoTimestamp) {
        const entryDate = new Date(isoTimestamp);
        const now = new Date();
        const twoDaysInMs = 2 * 24 * 60 * 60 * 1000;
        const diffTime = now.getTime() - entryDate.getTime();
        return diffTime >= twoDaysInMs;
    }

    function renderHistoryList(historyArray) {
        const historyListContainer = document.getElementById('historyListContainer');
        if (!historyListContainer) return;

        historyListContainer.innerHTML = ''; 
        
        if (historyArray.length === 0) {
            historyListContainer.innerHTML = '<p class="text-gray-500 italic">No search history yet. Start translating!</p>';
            return;
        }

        historyArray.forEach((item, index) => {
            const entryId = `hist-${index}`;
            const MAX_LENGTH = 200;
            
            const renderFieldWithReadMore = (field, label, buttonPrefix, initialContainerClass = '') => {
                const fullText = item[field] || 'No ' + field.toLowerCase().replace(/words$/, ' word') + ' logged.';
                const needsReadMore = fullText.length > MAX_LENGTH && !fullText.includes('No ' + field.toLowerCase().replace(/words$/, ' word'));
                const truncatedText = needsReadMore ? fullText.substring(0, MAX_LENGTH) + '...' : fullText;
                const hiddenText = needsReadMore ? fullText.substring(MAX_LENGTH) : '';
                const toggleId = `${buttonPrefix}${entryId}`;

                return `
                    <p class="${initialContainerClass}">
                        <span class="font-semibold text-gray-700 dark:text-gray-300">${label}: </span>
                        
                        <span id="trunc-${toggleId}">${truncatedText}</span>

                        <span id="hidden-content-${toggleId}" class="${needsReadMore ? 'hidden' : ''} text-gray-600 dark:text-gray-400">
                            ${hiddenText}
                        </span>
                        
                        ${needsReadMore ? 
                            `<button id="read-more-btn-${toggleId}" onclick="toggleReadMore('${toggleId}')" class="text-indigo-500 hover:text-indigo-700 font-medium ml-1 bg-transparent border-none p-0">
                                Read More...
                            </button>` 
                            : ''
                        }
                    </p>
                `;
            };

            const entryDiv = document.createElement('div');
            entryDiv.className = 'p-3 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-indigo-50 transition duration-150 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600';
            
            const displayTimestamp = new Date(item.timestamp).toLocaleString(); 

            const sourceBaseHtml = renderFieldWithReadMore('source', 'Source', 'source-', 'font-bold text-gray-800 dark:text-gray-100');
            const targetBaseHtml = renderFieldWithReadMore('target', 'Translation', 'target-', 'text-indigo-600 dark:text-indigo-300');

            const sourceContent = sourceBaseHtml.replace(/<p class="[^"]*">/, '').replace('</p>', '');
            const targetContent = targetBaseHtml.replace(/<p class="[^"]*">/, '').replace('</p>', '');

            entryDiv.innerHTML = `
                <p class="text-xs text-gray-400 mb-1">${displayTimestamp}</p>
                
                <p class="font-bold text-gray-800 dark:text-gray-100">
                    ${sourceContent} 
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">(${item.sourceLang})</span>
                </p>

                <p class="text-indigo-600 dark:text-indigo-300">
                    ${targetContent} 
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">(${item.targetLang})</span>
                </p>

                <div class="mt-2 pt-2 border-t border-gray-300 dark:border-gray-600 text-sm space-y-2">
                    ${renderFieldWithReadMore('definition', 'Definition', 'def-')}

                    ${renderFieldWithReadMore('similarWords', 'Similar Words', 'sim-')}
                </div>
            `;
            
            historyListContainer.appendChild(entryDiv);
        });
    }

    function setupHistoryButtons() {
        let buttonContainer = document.getElementById('historySortButtons');
        if (buttonContainer) {
            return; 
        }

        buttonContainer = document.createElement('div');
        buttonContainer.id = 'historySortButtons';
        buttonContainer.className = 'flex space-x-2 mb-4';

        const buttonsConfig = [
            { id: 'sort-all', text: 'All History', sortType: 'all', initialClass: 'bg-indigo-600 text-white' },
            { id: 'sort-newest', text: 'Newest (Today/Yesterday)', sortType: 'newest', initialClass: 'bg-gray-200 text-gray-700 hover:bg-indigo-100' },
            { id: 'sort-older', text: 'Older (3+ Days)', sortType: 'older', initialClass: 'bg-gray-200 text-gray-700 hover:bg-indigo-100' },
        ];

        buttonsConfig.forEach(config => {
            const btn = document.createElement('button');
            btn.id = config.id;
            btn.textContent = config.text;
            btn.onclick = () => window.sortHistory(config.sortType);
            btn.className = `px-4 py-2 text-sm font-medium rounded-lg transition duration-150 ${config.initialClass}`;
            buttonContainer.appendChild(btn);
        });

        const clearBtn = document.getElementById('clearHistoryButton') || document.createElement('button');
        clearBtn.id = 'clearHistoryButton';
        clearBtn.onclick = window.openClearHistoryConfirm; 
        clearBtn.textContent = 'Clear History';
        clearBtn.className = 'ml-auto px-4 py-2 text-sm font-medium rounded-lg text-red-600 border border-red-600 hover:bg-red-50 transition duration-150 hidden';
        buttonContainer.appendChild(clearBtn);


        const historyStatus = document.getElementById('historyStatus');
        if (historyStatus) {
            historyStatus.parentNode.insertBefore(buttonContainer, historyStatus);
        }  
    }


    window.sortHistory = function(sortType) {
        const historySortButtons = document.getElementById('historySortButtons');
        if (historySortButtons) {
            historySortButtons.querySelectorAll('button').forEach(btn => {
                if (!btn.id.includes('clear')) {
                    btn.classList.remove('bg-indigo-600', 'text-white');
                    btn.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-indigo-100');
                }
            });
        }

        let filteredHistory = [...originalHistoryData]; 
        let buttonId;

        if (sortType === 'newest') {
            filteredHistory = originalHistoryData
                .filter(item => !isOlderThanTwoDays(item.timestamp))
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); 
            buttonId = 'sort-newest';

        } else if (sortType === 'older') {
            filteredHistory = originalHistoryData
                .filter(item => isOlderThanTwoDays(item.timestamp))
                .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); 
            buttonId = 'sort-older';
            
        } else { 
            filteredHistory = [...originalHistoryData];
            filteredHistory.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            buttonId = 'sort-all';
        }
        
        const activeBtn = document.getElementById(buttonId);
        if (activeBtn) {
            activeBtn.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-indigo-100');
            activeBtn.classList.add('bg-indigo-600', 'text-white');
        }

        currentHistoryData = filteredHistory;
        renderHistoryList(currentHistoryData); 
    }

    window.openHistoryModal = async function() {
        setupHistoryButtons();
        
        const historyListContainer = document.getElementById('historyListContainer');
        const clearHistoryButton = document.getElementById('clearHistoryButton');
        const historyStatus = document.getElementById('historyStatus');
        
        if (!historyListContainer || !clearHistoryButton || !historyStatus) {
            console.error("Required history modal elements not found.");
            return;
        }

        historyListContainer.innerHTML = '';
        clearHistoryButton.classList.add('hidden');
        historyStatus.innerHTML = '<span class="text-indigo-600">Loading history...</span>';
        document.getElementById('historyModal')?.classList.remove('hidden');

        let history = [];
        let statusText = '';
        const userEmail = currentUser ? currentUser.email : 'guest';

        if (currentUser) {
            const fetchResult = await sendAuthRequest('getHistory', { email: userEmail }); 
            
            if (fetchResult.success && fetchResult.history) {
                history = fetchResult.history.map(item => ({
                    ...item,
                    timestamp: new Date(item.timestamp).toISOString(),
                }));
                statusText = `History for <strong>${currentUser.email}</strong>, retrieved from server.`;
            } else {
                history = getHistory(); 
                statusText = `Could not load server history. Showing local history for <strong>${currentUser.email}</strong>.`;
            }
        } else {
            history = getHistory();
            statusText = `You are not logged in. Showing <strong>Guest History</strong> (saved locally).`;
        }

        historyStatus.innerHTML = statusText;
        
        originalHistoryData = history; 
        currentHistoryData = history; 

        clearHistoryButton.classList.toggle('hidden', originalHistoryData.length === 0);

        window.sortHistory('all'); 
    }

    // --- Utility Functions (TTS, Formatting, etc.) ---
    
    function debounce(func, delay) {
        let timeoutId;
        return function(value) {
            const context = this;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, [value]);
            }, delay);
        };
    }

    window.swapLanguages = function() {
        const tempLang = langA.value;
        langA.value = langB.value;
        langB.value = tempLang;

        const tempText = inputTextA.value;
        inputTextA.value = inputTextB.value;
        inputTextB.value = tempText;
        
        updateLabels();
        updateTranslateButtonState();   
    }

    window.clearText = function(boxId) {
        isTranslating = true;
        if (boxId === 'A') {
            inputTextA.value = '';
            inputTextB.value = '';
            inputTextA.focus();
        } else if (boxId === 'B') {
            inputTextB.value = '';
            inputTextA.value = '';
            inputTextB.focus();
        }

        definitionContent.innerHTML = 'Definition for your source text will appear here.';
        similarWordsContent.innerHTML = 'Synonyms for your source text will appear here.';
        imageResults.innerHTML = 'Images related to your source text will appear here after translation.';    
        speakButtonA.disabled = true;
        speakButtonB.disabled = true;
        speakButtonDef.disabled = true;
        speakButtonSimilarWords.disabled = true;
        
        document.getElementById('stopButtonA').disabled = true;
        document.getElementById('stopButtonA').classList.add('opacity-0');
        document.getElementById('stopButtonB').disabled = true;
        document.getElementById('stopButtonB').classList.add('opacity-0');
        document.getElementById('stopButtonDef').disabled = true;
        document.getElementById('stopButtonDef').classList.add('opacity-0');
        document.getElementById('stopButtonSimilarWords').disabled = true;
        document.getElementById('stopButtonSimilarWords').classList.add('opacity-0');

        clearSources();
        updateTranslateButtonState();   
        isTranslating = false;
    }

    function clearSources() {
        sourceList.innerHTML = '';
        sourcesDiv.classList.add('hidden');
    }
    
    function setLoading(isLoading, targetBox) {
        translateButton.disabled = isLoading || (inputTextA.value.trim().length === 0 && inputTextB.value.trim().length === 0);

        const loadingHTML = `
            <div class="loading-container">
                <svg class="svg-spinner w-8 h-8 text-indigo-500 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
        `;
        
        if (targetBox === 'A') {
            inputTextA.classList.toggle('loading', isLoading);
        } else if (targetBox === 'B') {
            inputTextB.classList.toggle('loading', isLoading);
        } else if (targetBox === 'DEF') {
            if (isLoading) {
                definitionContent.innerHTML = loadingHTML;
                similarWordsContent.innerHTML = loadingHTML;
                imageResults.innerHTML = loadingHTML;
            } else if (definitionContent.querySelector('.loading-container')) {
                definitionContent.innerHTML = 'Definition for your source text will appear here.';
                similarWordsContent.innerHTML = 'Synonyms for your source text will appear here.';
                imageResults.innerHTML = 'Images related to your source text will appear here after translation.';
            }
            definitionContent.classList.toggle('opacity-50', isLoading);
            similarWordsContent.classList.toggle('opacity-50', isLoading);
            imageResults.classList.toggle('opacity-50', isLoading);
        }
    }

    function formatSynonyms(synonymsText) {
        if (!synonymsText || synonymsText.toLowerCase() === 'n/a' || synonymsText.trim() === '') {
            speakButtonSimilarWords.disabled = true;
            return '<span class="text-gray-500">No synonyms found.</span>';
        }
        speakButtonSimilarWords.disabled = false;

        return synonymsText.split(',')
            .map(s => s.trim())
            .filter(s => s.length > 0)
            .map(s => {
                return `<span class="inline-block bg-green-100 text-green-800 text-sm font-medium m-1 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300 transition duration-150 ease-in-out">
                            ${s}
                         </span>`;
            })
            .join(''); 
    }

    function formatDefinition(text) {
        if (!text || text.toLowerCase() === 'n/a') return "No definition found.";
        let formattedText = text.replace(/\\n/g, '<br>');
        formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        formattedText = formattedText.replace(/\*(.*?)\:/g, '<strong>$1:</strong>');
        formattedText = formattedText.replace(/\*/g, '');
        return formattedText;
    }
    
    function stripHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

    // --- TTS CONTROL LOGIC ---

    function resetSpeechState(button, stopButton, textAvailable) {
        button.disabled = !textAvailable; 
        button.classList.remove('loading');

        if (stopButton) {
            stopButton.disabled = true;
            stopButton.classList.add('opacity-0');
        }
    }

    window.stopSpeech = function() {
        if (nativeSynth.speaking) {
            nativeSynth.cancel();
        }
        document.querySelectorAll('.speak-btn').forEach(btn => btn.classList.remove('loading'));
        document.querySelectorAll('.stop-btn').forEach(btn => { btn.disabled = true; btn.classList.add('opacity-0'); });
    };

    window.handleSpeakSimilarWord = function(word, buttonElement) {
        buttonElement.classList.add('loading');
        buttonElement.disabled = true;
        handleSpeak(word, null, buttonElement);
    }

    window.speakAllSimilarWords = function() {
        const words = similarWordsContent.textContent.trim().replace('Synonyms for your source text will appear here.', '');
        if (!words) return;
        handleSpeak(words, 'SimilarWords'); 
    }
    
    window.speakDefinition = function() {
        const textToSpeak = stripHtml(definitionContent.innerHTML);
        if (!textToSpeak || textToSpeak.includes('Definition for your source text')) return;
        handleSpeak(textToSpeak, 'Def');
    }

    window.speakResult = function(boxId) {
        const textToSpeak = (boxId === 'A' ? inputTextA.value : inputTextB.value).trim();
        if (!textToSpeak) return;
        handleSpeak(textToSpeak, boxId);
    }

    window.handleSpeak = function(textToSpeak, speakerId, buttonElement) {
        if (!('speechSynthesis' in window)) {
            console.error("Browser does not support the Web Speech API.");
            return;
        }

        const buttonMap = { 'A': speakButtonA, 'B': speakButtonB, 'Def': speakButtonDef, 'SimilarWords': speakButtonSimilarWords };
        const button = buttonElement || buttonMap[speakerId];
        
        const stopButton = document.getElementById(`stopButton${speakerId}`);
        
        if (!textToSpeak.trim() || !button) return;

        if (nativeSynth.speaking) {
            nativeSynth.cancel();
        }
        
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        const currentVoiceName = document.getElementById('voiceSelect').value;
        const voices = nativeSynth.getVoices();
        
        const selectedVoice = voices.find(v => v.name === currentVoiceName);
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        }  
        
        button.disabled = true;
        button.classList.add('loading');
        if (stopButton) {
            stopButton.disabled = false;
            stopButton.classList.remove('opacity-0'); 
        }

        const resetHandler = () => {
             const textAvailable = !!textToSpeak.trim(); 
             resetSpeechState(button, stopButton, textAvailable);
        };

        utterance.onend = resetHandler;
        utterance.onerror = resetHandler;

        nativeSynth.speak(utterance);
    }


    // --- PEXELS IMAGE SEARCH (SECURE PROXY VERSION) ---
    async function fetchPexelsImages(query) {
        if (query.length < 2) {
            imageResults.innerHTML = `<p class="text-gray-500 dark:text-gray-400">Enter more text to search for images.</p>`;
            return;
        }

        imageResults.innerHTML = '<div class="flex items-center text-indigo-600 dark:text-indigo-400"><svg class="svg-spinner w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Searching Images...</div>';

        try {
            const response = await fetch(PROXY_URL, {
                method: 'POST',
                // Using text/plain prevents OPTIONS preflight issues with GAS
                headers: { 'Content-Type': 'text/plain;charset=utf-8' }, 
                body: JSON.stringify({
                    action: 'images',
                    query: query
                })
            });

            const data = await response.json();

            if (data.photos && data.photos.length > 0) {
                imageResults.innerHTML = ''; 
                
                const imageWrapper = document.createElement('div');
                imageWrapper.className = 'flex flex-wrap gap-2 justify-start'; 

                data.photos.forEach(photo => {
                    const img = document.createElement('img');
                    img.src = photo.src.small;    
                    img.alt = photo.alt || 'Pexels Photo';
                    img.className = 'w-[100px] h-[100px] object-cover rounded-md shadow-md transition transform hover:scale-105 cursor-pointer';
                    img.onclick = () => window.open(photo.url, '_blank'); 
                    imageWrapper.appendChild(img);
                });
                 imageResults.appendChild(imageWrapper);

            } else {
                imageResults.innerHTML = `<p class="text-gray-500 dark:text-gray-400">No images found.</p>`;
            }

        } catch (error) {
            console.error('Proxy Error:', error);
            imageResults.innerHTML = '<p style="color: red;" class="dark:text-red-400">Error loading images.</p>';
        }
    }


    // --- TRANSLATION LOGIC (SECURE PROXY VERSION) ---
    async function getTranslationAndDefinition(text, fromLang, toLang) {
        try {
            const response = await fetch(PROXY_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({
                    action: 'translate',
                    text: text,
                    sourceLang: fromLang,
                    targetLang: toLang
                })
            });

            const result = await response.json();
            const candidate = result.candidates?.[0];

            clearSources();
            const groundingMetadata = candidate?.groundingMetadata;
            if (groundingMetadata && groundingMetadata.groundingAttributions) {
                const sources = groundingMetadata.groundingAttributions
                    .map(attr => attr.web)
                    .filter(web => web?.uri && web?.title);

                if (sources.length > 0) {
                    sourcesDiv.classList.remove('hidden');
                    sources.forEach(source => {
                        const li = document.createElement('li');
                        li.innerHTML = `<a href="${source.uri}" target="_blank" class="text-indigo-600 hover:text-indigo-800 underline transition duration-150 ease-in-out">${source.title}</a>`;
                        sourceList.appendChild(li);
                    });
                }
            }

            if (candidate && candidate.content?.parts?.[0]?.text) {
                const rawText = candidate.content.parts[0].text;
                
                const translationMatch = rawText.match(/\[TRANSLATION\]([\s\S]*?)\[\/TRANSLATION\]/);
                const definitionMatch = rawText.match(/\[DEFINITION\]([\s\S]*?)\[\/DEFINITION\]/);
                const synonymsMatch = rawText.match(/\[SYNONYMS\]([\s\S]*?)\[\/SYNONYMS\]/);

                return { 
                    translation: translationMatch ? translationMatch[1].trim() : "Translation not found.", 
                    definition: definitionMatch ? definitionMatch[1].trim() : "Definition not found.", 
                    synonyms: synonymsMatch ? synonymsMatch[1].trim() : 'N/A' 
                };
            } else {
                return { translation: "Error: No content.", definition: "Error: No content.", synonyms: 'N/A' };
            }

        } catch (error) {
            console.error("Translation error:", error);
            return { translation: "Error: API failure.", definition: "Error: API failure.", synonyms: 'N/A' };
        }
    }
    
    async function sendTranslationToLogger(sourceWord, translatedWord, definition, similarWords) {
        if (!TRANSLATION_LOGGER_URL || TRANSLATION_LOGGER_URL.includes("YOUR_TRANSLATION_LOGGER_APPSCRIPT_URL_HERE")) {
            console.warn("TRANSLATION_LOGGER_URL is not set. Skipping server-side history logging.");
            return;
        }

        const formData = new FormData();
        formData.append("sourceWord", sourceWord);
        formData.append("translatedWord", translatedWord);
        formData.append("definition", stripHtml(definition)); 
        formData.append("similarWords", similarWords); 
        formData.append("userEmail", currentUser ? currentUser.email : 'Guest'); 
        formData.append("sourceLang", langA.value); 
        formData.append("targetLang", langB.value); 


        try {
            const response = await fetch(TRANSLATION_LOGGER_URL, {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (result.result !== 'success') {
                console.error("Server History Log Failed:", result.message);
            }
        } catch (error) {
            console.error("Network error during history logging:", error);
        }
    }
    
    function getSourceAndTarget() {
        const textA = inputTextA.value.trim();
        const textB = inputTextB.value.trim();

        if (textA.length > 0 && textB.length === 0) {
            return { sourceText: textA, sourceLang: langA.value, targetLang: langB.value, resultBox: 'B', sourceBox: 'A' };
        } else if (textB.length > 0 && textA.length === 0) {
            return { sourceText: textB, sourceLang: langB.value, targetLang: langA.value, resultBox: 'A', sourceBox: 'B' };
        }
        if (textA.length > 0 && textB.length > 0) {
            return { sourceText: textA, sourceLang: langA.value, targetLang: langB.value, resultBox: 'B', sourceBox: 'A' };
        }
        return null; 
    }
    
    window.handleTranslateButtonClick = function(event) {
        const translationInfo = getSourceAndTarget();
        
        if (!translationInfo || isTranslating) {
            return;
        }

        translateButton.classList.add('is-translating');
        translateButton.disabled = true; 

        if (translationInfo.sourceBox === 'A') {
            translateAtoB(translationInfo.sourceText, true);    
        } else {
            translateBtoA(translationInfo.sourceText, true);
        }
    }
    
    window.checkTranslate = function(event) {
        if (event.key === 'Enter' || event.keyCode === 13) {
            if (event.shiftKey || event.ctrlKey) {
                return;    
            }
            event.preventDefault();    
            window.handleTranslateButtonClick();
        }
    }
    
    async function translateAtoB(text, isManual = false) {    
        if (isTranslating) return;
        text = text.trim();
        
        speakButtonA.disabled = text.length === 0;
        updateTranslateButtonState();

        if (!text) {
            inputTextB.value = '';
            definitionContent.innerHTML = 'Definition for your source text will appear here.';
            similarWordsContent.innerHTML = 'Synonyms for your source text will appear here.';
            imageResults.innerHTML = 'Images related to your source text will appear here after translation.';
            speakButtonB.disabled = true;
            speakButtonDef.disabled = true;
            speakButtonSimilarWords.disabled = true;
            clearSources();
            
            translateButton.classList.remove('is-translating');
            return;
        }

        if (!isManual) return;    

        isTranslating = true;
        setLoading(true, 'B');    
        setLoading(true, 'DEF');    

        const { translation, definition, synonyms } = await getTranslationAndDefinition(text, langA.value, langB.value);
        
        setLoading(false, 'B');
        setLoading(false, 'DEF');
        
        if (isManual) { 
            inputTextB.value = translation;
            const formattedDefinition = formatDefinition(definition);
            const formattedSynonyms = formatSynonyms(synonyms);
            
            definitionContent.innerHTML = formattedDefinition;
            similarWordsContent.innerHTML = formattedSynonyms;    
            
            fetchPexelsImages(text);

            if (translation && translation !== "Translation not found." && translation !== "Error: API failure.") {
                saveToHistory(text, langA.value, translation);
                sendTranslationToLogger(text, translation, formattedDefinition, synonyms);
            }
            
            speakButtonB.disabled = translation.length === 0;
            speakButtonDef.disabled = (definitionContent.textContent || definitionContent.innerText).includes('Definition for your source text');
            
            translateButton.classList.remove('is-translating');
        }

        isTranslating = false;
        updateTranslateButtonState();
    }

    async function translateBtoA(text, isManual = false) {    
        if (isTranslating) return;    
        text = text.trim();
        
        speakButtonB.disabled = text.length === 0;
        updateTranslateButtonState();

        if (!text) {
            inputTextA.value = '';
            definitionContent.innerHTML = 'Definition for your source text will appear here.';
            similarWordsContent.innerHTML = 'Synonyms for your source text will appear here.';
            imageResults.innerHTML = 'Images related to your source text will appear here after translation.';
            speakButtonA.disabled = true;
            speakButtonDef.disabled = true;
            speakButtonSimilarWords.disabled = true;
            clearSources();
            
            translateButton.classList.remove('is-translating');
            return;
        }

        if (!isManual) return;    

        isTranslating = true;
        setLoading(true, 'A');    
        setLoading(true, 'DEF');    

        const { translation, definition, synonyms } = await getTranslationAndDefinition(text, langB.value, langA.value);
        
        setLoading(false, 'A');
        setLoading(false, 'DEF');

            if (isManual) { 
            inputTextA.value = translation;
            const formattedDefinition = formatDefinition(definition);
            const formattedSynonyms = formatSynonyms(synonyms);

            definitionContent.innerHTML = formattedDefinition;
            similarWordsContent.innerHTML = formattedSynonyms;    
            
            fetchPexelsImages(text);

            if (translation && translation !== "Translation not found." && translation !== "Error: API failure.") {
                saveToHistory(text, langB.value, translation);
                sendTranslationToLogger(text, translation, formattedDefinition, synonyms);
            }
            
            speakButtonA.disabled = translation.length === 0;
            speakButtonDef.disabled = (definitionContent.textContent || definitionContent.innerText).includes('Definition for your source text');    
            
            translateButton.classList.remove('is-translating');
        }

        isTranslating = false;
        updateTranslateButtonState();
    }

    function updateTranslateButtonState() {
        const hasInputA = inputTextA.value.trim().length > 0;
        const hasInputB = inputTextB.value.trim().length > 0;
        
        translateButton.disabled = isTranslating || !(hasInputA || hasInputB);
        
        if (hasInputA && !hasInputB) {
            inputTextA.classList.add('border-indigo-500');
            inputTextB.classList.remove('border-indigo-500');
        } else if (hasInputB && !hasInputA) {
            inputTextB.classList.add('border-indigo-500');
            inputTextA.classList.remove('border-indigo-500');
        } else {
            inputTextA.classList.remove('border-indigo-500');
            inputTextB.classList.remove('border-indigo-500');
        }
    }


    // --- Event Listeners and Initialization ---

    function initializeListeners() {
        inputTextA.addEventListener('input', (event) => {    
            updateTranslateButtonState();    
            speakButtonA.disabled = event.target.value.trim().length === 0;
            inputTextB.value = ''; 
        });
        inputTextB.addEventListener('input', (event) => {    
            updateTranslateButtonState();    
            speakButtonB.disabled = event.target.value.trim().length === 0;
            inputTextA.value = ''; 
        });

        langA.addEventListener('change', () => {
            updateLabels();
            updateTranslateButtonState();
        });
        langB.addEventListener('change', () => {
            updateLabels();
            updateTranslateButtonState();
        });
        
        darkModeToggle.addEventListener('change', (e) => toggleDarkMode(e.target.checked));
        
        voiceSelect.addEventListener('change', (e) => setTTSVoice(e.target.value));    
        
        translateButton.addEventListener('click', window.handleTranslateButtonClick);    

        inputTextA.addEventListener('keyup', window.checkTranslate);
        inputTextB.addEventListener('keyup', window.checkTranslate);

        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.querySelectorAll('input, textarea').forEach(input => {
                input.addEventListener('input', () => validateField(input));
                input.addEventListener('blur', () => validateField(input));
            });
        }
        
        populateLanguageSelectors();
        updateAccountStatus();
        updateTranslateButtonState();
        
        if (localStorage.getItem('darkMode') === 'true') {
            toggleDarkMode(true);
        }
        if (localStorage.getItem('ttsVoice')) {
            ttsVoice = localStorage.getItem('ttsVoice');
            voiceSelect.value = ttsVoice;
        }
    }

    document.addEventListener('DOMContentLoaded', initializeListeners);


// --- CONTACT US VALIDATION & SUBMISSION LOGIC ---

function validateField(input) {
    const errorSpan = input.closest('.form-group')?.querySelector('.error-message');
    let errorMessage = '';

            if (input.name === 'name') {
                if (!input.value.trim()) {
                    errorMessage = 'Enter your Name.';
                } else if (!/^[a-zA-Z\s]+$/.test(input.value.trim())) {
                    errorMessage = 'Please enter a valid name (letters and spaces only).';
                }
            } else if (input.name === 'email') {
                if (!input.value.trim()) {
                    errorMessage = 'Enter your Email ID.';
                } else if (!/^\S+@\S+\.\S+$/.test(input.value.trim())) {
                    errorMessage = 'Please enter a valid email address.';
                }
            } else if (input.name === 'phone') {
                if (!input.value.trim()) {
                    errorMessage = 'Enter your Phone number.';
                } else if (input.value.length < 10 || isNaN(input.value) || input.value.length > 15) {    
                    errorMessage = 'Please enter a valid phone number.';
                }
            } else if (input.name === 'message' && !input.value.trim()) {
                errorMessage = 'Enter your Message here.';
            }

    if (errorSpan) {
        if (errorMessage) {
            input.classList.add('border-red-500'); 
            errorSpan.textContent = errorMessage;
            errorSpan.classList.remove('hidden');
            return false;
        } else {
            input.classList.remove('border-red-500');
            errorSpan.classList.add('hidden');
            return true;
        }
    }
    return !errorMessage;    
}

window.handleContactSubmit = async function(event) {
    event.preventDefault();
    const form = document.getElementById('contactForm');
    const statusDiv = document.getElementById('status');    
    const submitButton = document.getElementById('contactSubmitButton');
    const scriptURL = form.action; 

    if (!statusDiv) return;

    let allValid = true;
    form.querySelectorAll('input, textarea').forEach(input => {
        if (!validateField(input)) {
            allValid = false;
        }
    });

    if (!allValid) {
        statusDiv.innerHTML = "Please fix the errors above.";
        statusDiv.className = 'p-3 rounded-lg text-red-500 bg-red-100 text-sm font-semibold block';
        statusDiv.classList.remove('hidden');
        return;
    }

    statusDiv.innerHTML = "Sending message...";
    statusDiv.className = 'p-3 rounded-lg text-indigo-700 bg-indigo-100 text-sm font-semibold block';
    statusDiv.classList.remove('hidden');
    submitButton.disabled = true;

    const formData = new FormData(form);

    try {
        const response = await fetch(scriptURL, {
            method: 'POST',
            body: formData 
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();

        submitButton.disabled = false;
        
        if (result.result === 'success') {
            statusDiv.innerHTML = "✅ Message sent successfully! We'll be in touch soon.";
            statusDiv.className = 'p-3 rounded-lg text-green-700 bg-green-100 text-sm font-semibold block';
            form.reset();
        } else {
            statusDiv.innerHTML = `❌ Error: ${result.message || 'Script submission failed.'}`;
            statusDiv.className = 'p-3 rounded-lg text-red-500 bg-red-100 text-sm font-semibold block';
        }

    } catch (error) {
        console.error('Submission Error:', error);
        submitButton.disabled = false;
        statusDiv.innerHTML = `🚫 Network Error: Could not connect to the server.`;
        statusDiv.className = 'p-3 rounded-lg text-red-500 bg-red-100 text-sm font-semibold block';
    }

    setTimeout(() => { statusDiv.classList.add('hidden'); }, 10000);
}


document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') { e.preventDefault(); }
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) { e.preventDefault(); }
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) { e.preventDefault(); }
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) { e.preventDefault(); }
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) { e.preventDefault(); }
});
    document.addEventListener('dragstart', function(e) {
    e.preventDefault();
});
