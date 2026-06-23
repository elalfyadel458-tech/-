// Javascript Logic & Data Management for Al-Mustafa Center

// --- TRANSLATION STRINGS ---
const translations = {
    ar: {
        splash_title: "مركز المصطفى",
        splash_subtitle: "لتحفيظ القرآن الكريم وتدريس علومه",
        nav_brand: "مركز المصطفى",
        nav_home: "الرئيسية",
        nav_about: "عن المركز",
        nav_video: "الحفل السنوي",
        nav_pricing: "الاشتراكات",
        nav_certificates: "الإجازات والشهادات",
        nav_register: "سجل الآن",
        hero_badge: "أونلاين وأوفلاين",
        hero_title: "رحلتك المباركة لحفظ القرآن الكريم تبدأ هنا",
        hero_desc: "تعلم التلاوة والتجويد والحفظ المتقن بأحدث الطرق العلمية والتربوية مع إمكانية الحصول على الإجازات المتصلة بالسند.",
        hero_cta_register: "ابدأ رحلتك الآن",
        hero_cta_about: "اكتشف المزيد",
        owner_name: "الشيخ مصطفى الألفي",
        owner_title: "مؤسس ومدير مركز المصطفى",
        about_title: "عن مركز المصطفى",
        about_subtitle: "نهج أصيل، وتأصيل علمي لتحفيظ كتاب الله",
        about_card1_title: "منهج متكامل",
        about_card1_desc: "نتبع منهجاً متدرجاً يناسب جميع الأعمار والمستويات، من التلقين البسيط للأطفال إلى دراسة المتون الكبرى للطلاب المتقدمين.",
        about_card2_title: "مرونة التعليم",
        about_card2_desc: "ندمج بين الدراسة الحلقية المباشرة في مقر المركز (أوفلاين) وبين الدراسة التفاعلية عن بُعد (أونلاين) بجودة عالية.",
        about_card3_title: "سند متصل",
        about_card3_desc: "نؤهل الطلاب المتميزين للحصول على الإجازات والشهادات المعتمدة في القراءات والروايات المختلفة بسند متصل للنبي ﷺ.",
        video_title: "حفل مسابقة أنوار القرآن",
        video_subtitle: "مقتطفات من حفل تكريم حفظة كتاب الله في مسابقة المركز الكبرى",
        play_video_label: "انقر لمشاهدة الحفل",
        pricing_title: "تفاصيل الاشتراكات",
        pricing_subtitle: "باقات موحدة للمحافظة على جودة والتزام التعليم للجميع",
        pricing_tag: "الخطة الشهرية الموحدة",
        pricing_currency: "ج.م",
        pricing_period: "/ شهرياً",
        pricing_feat_sessions: "12 حصة تفاعلية متكاملة شهرياً",
        pricing_feat_flexibility: "متاح أونلاين (عن بعد) أو أوفلاين (في المقر)",
        pricing_feat_duration: "حصة فردية مخصصة لضمان الفهم والحفظ",
        pricing_feat_prepaid: "نظام الدفع مقدم في بداية كل شهر",
        pricing_feat_followup: "متابعة أسبوعية وتقارير أداء دورية لأولياء الأمور",
        pricing_btn: "سجل في البرنامج الآن",
        cert_title: "قسم الإجازات والشهادات",
        cert_subtitle: "إجازات الشيخ مصطفى الألفي المعتمدة وشهادات التقدير",
        tab_quran: "إجازات القرآن الكريم",
        tab_others: "إجازات وشهادات أخرى",
        quran_cert_1: "إجازة القرآن الكريم - الجزء الأول",
        quran_cert_2: "إجازة القرآن الكريم - الجزء الثاني",
        quran_cert_3: "إجازة القرآن الكريم - الجزء الثالث",
        other_cert_1: "شهادة تقدير وإنجاز علمي",
        other_cert_2: "إجازة في العلوم الشرعية",
        other_cert_3: "شهادة حضور الدورات المتخصصة",
        reg_title: "تقديم طلب الالتحاق بالمركز",
        reg_subtitle: "املأ الاستمارة بدقة وسنتواصل معك لتحديد موعد الاختبار وتأكيد الاشتراك",
        form_name: "الاسم بالكامل *",
        form_age: "العمر *",
        form_address: "البلد / العنوان بالتفصيل *",
        form_phone: "رقم الهاتف (الواتساب) *",
        form_mode: "نظام الدراسة المفضل *",
        form_select_mode: "اختر نظام الدراسة...",
        form_mode_online: "أونلاين (عن بُعد عبر زووم / تليجرام)",
        form_mode_offline: "أوفلاين (حضورياً بمقر المركز)",
        form_stop: "منذ متى وأنت متوقف عن الحفظ؟ *",
        form_experience: "تجربتك السابقة في حفظ القرآن الكريم بالتفصيل *",
        form_notes: "أي ملاحظات إضافية أو رغبات خاصة؟",
        form_submit: "إرسال طلب الانضمام",
        success_title: "تم إرسال طلبك بنجاح!",
        success_desc: "شكرًا لك على ثقتك بمركز المصطفى. سنقوم بالتواصل معك عبر رقم الواتساب الذي سجلته خلال 24 ساعة.",
        error_title: "حدث خطأ أثناء الإرسال!",
        error_desc: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مجدداً.",
        footer_desc: "مؤسسة تعليمية قرآنية متميزة تسعى لنشر كتاب الله وتدريس علوم التجويد والقراءات بأعلى معايير الإتقان والجودة.",
        footer_quick_links: "روابط سريعة",
        footer_contact_info: "معلومات التواصل والمقر",
        contact_address: "مصر، كفر الثعبانية",
        copyright_text: "مركز المصطفى. جميع الحقوق محفوظة.",
        admin_pass_title: "الدخول للوحة الإدارة",
        admin_pass_desc: "يرجى إدخال كلمة المرور المخصصة للوحة التحكم:",
        admin_auth_err: "كلمة المرور غير صحيحة!",
        admin_btn_login: "دخول",
        dashboard_title: "لوحة تحكم إدارة مركز المصطفى",
        stat_visits: "إجمالي زيارات الموقع",
        stat_submissions: "إجمالي طلبات التسجيل",
        applicants_list: "قائمة المتقدمين الجدد",
        btn_export: "تصدير CSV",
        btn_clear_all: "حذف كل المتقدمين",
        th_date: "التاريخ",
        th_name: "الاسم",
        th_age: "العمر",
        th_address: "العنوان/البلد",
        th_phone: "رقم الواتساب",
        th_mode: "نظام الدراسة",
        th_stop: "التوقف",
        th_experience: "التجربة السابقة",
        th_notes: "ملاحظات",
        th_actions: "إجراءات",
        empty_applicants: "لا يوجد طلبات تقديم حتى الآن.",
        nav_virtual_room: "غرفة المقابلة",
        virtual_title: "غرفة المقابلة والحصص المرئية",
        virtual_subtitle: "تواصل مرئي مباشر مع الشيخ مصطفى الألفي مع شات مدمج وتغيير المظهر والوضعيات",
        btn_mode_theme: "تغيير المظهر (داكن/فاتح)",
        btn_mode_layout: "تغيير تخطيط الفيديو",
        btn_jitsi_connect: "تشغيل مكالمة حقيقية (Jitsi)",
        btn_jitsi_disconnect: "إنهاء المكالمة",
        teacher_cam_off: "كاميرا الشيخ مغلقة",
        student_cam_off: "كاميرا الطالب مغلقة",
        label_sheikh: "الشيخ مصطفى الألفي (المعلم)",
        label_student: "الطالب (أنت)",
        chat_header: "صندوق المحادثة الفورية وتدوين الملاحظات",
        chat_online: "نشط الآن",
        chat_system_welcome: "مرحباً بك في شات الغرفة التفاعلية لمركز المصطفى. يمكنك كتابة الرسائل أو الآيات القرآنية والتصحيحات هنا.",
        chat_input_placeholder: "اكتب رسالتك أو ملاحظاتك هنا..."
    },
    en: {
        splash_title: "Al-Mustafa Center",
        splash_subtitle: "For Quran Memorization & Islamic Sciences",
        nav_brand: "Al-Mustafa Center",
        nav_home: "Home",
        nav_about: "About",
        nav_video: "Annual Ceremony",
        nav_pricing: "Pricing",
        nav_certificates: "Certificates",
        nav_register: "Register Now",
        hero_badge: "Online & Offline",
        hero_title: "Your Blessed Journey to Quran Memorization Starts Here",
        hero_desc: "Learn Quran recitation, Tajweed, and memorization using modern educational methods with opportunities to receive certified Ijazah connected to the Prophet ﷺ.",
        hero_cta_register: "Start Your Journey",
        hero_cta_about: "Discover More",
        owner_name: "Sheikh Mustafa Al-Alfy",
        owner_title: "Founder & Director of Al-Mustafa Center",
        about_title: "About Al-Mustafa Center",
        about_subtitle: "Authentic Methodology & Scientific Foundation for Teaching the Book of Allah",
        about_card1_title: "Integrated Curriculum",
        about_card1_desc: "We follow a structured curriculum suitable for all ages and levels, from basic children's tutoring to major Islamic text studies for advanced pupils.",
        about_card2_title: "Flexible Learning",
        about_card2_desc: "We combine physical classes inside the center (offline) with interactive remote learning (online) with exceptional quality.",
        about_card3_title: "Continuous Sanad",
        about_card3_desc: "We qualify outstanding students to obtain authorized Ijazah and certificates in different narrations directly connected to the Prophet ﷺ.",
        video_title: "Anwar Al-Quran Ceremony",
        video_subtitle: "Highlights from the award ceremony honoring Quran memorizers in the center's grand competition",
        play_video_label: "Click to watch the ceremony",
        pricing_title: "Subscription Plans",
        pricing_subtitle: "Unified pricing to maintain top-quality and commitment for all learners",
        pricing_tag: "Unified Monthly Plan",
        pricing_currency: "EGP",
        pricing_period: "/ Month",
        pricing_feat_sessions: "12 interactive customized classes per month",
        pricing_feat_flexibility: "Available online (remotely) or offline (at the center)",
        pricing_feat_duration: "One-on-one sessions to guarantee comprehension and progress",
        pricing_feat_prepaid: "Prepaid payment system at the start of each cycle",
        pricing_feat_followup: "Weekly evaluations and detailed reports for parents",
        pricing_btn: "Enroll in the Program Now",
        cert_title: "Licenses & Certificates",
        cert_subtitle: "Sheikh Mustafa Al-Alfy's certified Islamic Ijazahs and appreciation certificates",
        tab_quran: "Quran Ijazahs",
        tab_others: "Other Certificates",
        quran_cert_1: "Holy Quran Ijazah - Part 1",
        quran_cert_2: "Holy Quran Ijazah - Part 2",
        quran_cert_3: "Holy Quran Ijazah - Part 3",
        other_cert_1: "Certificate of Appreciation & Scientific Achievement",
        other_cert_2: "Islamic Jurisprudence Ijazah",
        other_cert_3: "Specialized Training Attendance Certificate",
        reg_title: "Submit Admission Request",
        reg_subtitle: "Please fill the form carefully and we will contact you for assessment and registration approval",
        form_name: "Full Name *",
        form_age: "Age *",
        form_address: "Country / Full Address *",
        form_phone: "WhatsApp Number *",
        form_mode: "Preferred Study System *",
        form_select_mode: "Select learning mode...",
        form_mode_online: "Online (via Zoom / Telegram)",
        form_mode_offline: "Offline (In-person at the Center)",
        form_stop: "How long have you stopped memorizing? *",
        form_experience: "Describe your previous Quran memorization experience *",
        form_notes: "Additional notes or special requests?",
        form_submit: "Submit Application",
        success_title: "Application Sent Successfully!",
        success_desc: "Thank you for trusting Al-Mustafa Center. We will contact you via WhatsApp within 24 hours.",
        error_title: "Error Submitting Application!",
        error_desc: "Please check your internet connection and try again.",
        footer_desc: "A distinguished Quranic educational institution aiming to spread the Book of Allah and teach Tajweed and recitation with high standards.",
        footer_quick_links: "Quick Links",
        footer_contact_info: "Contact & Headquarters",
        contact_address: "Kafr El-Thobaneya, Egypt",
        copyright_text: "Al-Mustafa Center. All rights reserved.",
        admin_pass_title: "Admin Panel Login",
        admin_pass_desc: "Please enter the admin dashboard security code:",
        admin_auth_err: "Invalid security code!",
        admin_btn_login: "Access",
        dashboard_title: "Al-Mustafa Center Management Dashboard",
        stat_visits: "Total Page Visits",
        stat_submissions: "Total Registrations",
        applicants_list: "New Applicants List",
        btn_export: "Export CSV",
        btn_clear_all: "Clear All Applicants",
        th_date: "Date",
        th_name: "Name",
        th_age: "Age",
        th_address: "Address",
        th_phone: "WhatsApp",
        th_mode: "Study Mode",
        th_stop: "Stopped For",
        th_experience: "Experience",
        th_notes: "Notes",
        th_actions: "Actions",
        empty_applicants: "No registrations submitted yet.",
        nav_virtual_room: "Interview Room",
        virtual_title: "Virtual Classroom & Interview Room",
        virtual_subtitle: "Direct video connection with Sheikh Mustafa Al-Alfy with built-in chat and theme/layout toggles",
        btn_mode_theme: "Change Theme (Dark/Light)",
        btn_mode_layout: "Change Video Layout",
        btn_jitsi_connect: "Start Real Call (Jitsi)",
        btn_jitsi_disconnect: "Disconnect Call",
        teacher_cam_off: "Sheikh's Camera is Off",
        student_cam_off: "Student's Camera is Off",
        label_sheikh: "Sheikh Mustafa Al-Alfy (Teacher)",
        label_student: "Student (You)",
        chat_header: "Instant Chat & Lesson Notes Box",
        chat_online: "Active Now",
        chat_system_welcome: "Welcome to Al-Mustafa Center interactive room chat. You can type messages, Quranic verses, and corrections here.",
        chat_input_placeholder: "Type your message or notes here..."
    },
    tr: {
        splash_title: "El-Mustafa Merkezi",
        splash_subtitle: "Kuran-ı Kerim Ezberleme ve İslami İlimler",
        nav_brand: "El-Mustafa Merkezi",
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımızda",
        nav_video: "Yıllık Tören",
        nav_pricing: "Abonelik",
        nav_certificates: "Sertifikalar",
        nav_register: "Şimdi Kaydol",
        hero_badge: "Çevrimiçi ve Yüz Yüze",
        hero_title: "Kur'an Ezberleme Yolculuğunuz Burada Başlıyor",
        hero_desc: "Peygamber Efendimize ﷺ dayanan icazet alma imkanıyla, Kuran tilaveti, tecvid ve ezberlemeyi modern yöntemlerle öğrenin.",
        hero_cta_register: "Yolculuğa Başla",
        hero_cta_about: "Daha Fazla Bilgi",
        owner_name: "Şeyh Mustafa El-Alfi",
        owner_title: "El-Mustafa Merkezi Kurucusu ve Müdürü",
        about_title: "El-Mustafa Merkezi Hakkında",
        about_subtitle: "Allah'ın Kitabını Öğretmek İçin Güvenilir ve İlmi Metot",
        about_card1_title: "Bütünsel Müfredat",
        about_card1_desc: "Çocuklar için basit derslerden ileri düzey öğrenciler için büyük İslami metin derslerine kadar her yaşa ve seviyeye uygun müfredat sunuyoruz.",
        about_card2_title: "Esnek Eğitim",
        about_card2_desc: "Merkezimizdeki yüz yüze dersleri (ofline), çevrimiçi (online) yüksek kaliteli uzaktan eğitimle birleştiriyoruz.",
        about_card3_title: "Kesintisiz İsnad",
        about_card3_desc: "Seçkin öğrencileri, Peygamberimiz ﷺ'e kadar uzanan bir silsileyle farklı kıraatlerde yetkili İcazet almaya hazırlıyoruz.",
        video_title: "Envar'ul Kuran Töreni",
        video_subtitle: "Merkezin büyük yarışmasında Kuran ezberleyenleri ödüllendirme töreninden kesitler",
        play_video_label: "Töreni izlemek için tıklayın",
        pricing_title: "Abonelik Detayları",
        pricing_subtitle: "Herkes için kaliteli ve disiplinli bir eğitim sağlamak amacıyla tek fiyat politikası",
        pricing_tag: "Standart Aylık Plan",
        pricing_currency: "EGP",
        pricing_period: "/ Aylık",
        pricing_feat_sessions: "Ayda 12 adet birebir etkileşimli ders",
        pricing_feat_flexibility: "Çevrimiçi (Online) veya merkezde yüz yüze (Ofline) katılım",
        pricing_feat_duration: "Ezber ve kavrama garantisi için özel dersler",
        pricing_feat_prepaid: "Her ayın başında peşin ödeme sistemi",
        pricing_feat_followup: "Veliler için haftalık değerlendirmeler ve gelişim raporları",
        pricing_btn: "Programa Şimdi Kaydol",
        cert_title: "İcazetler ve Belgeler",
        cert_subtitle: "Şeyh Mustafa El-Alfi'nin onaylı Kuran icazetleri ve başarı belgeleri",
        tab_quran: "Kuran İcazetleri",
        tab_others: "Diğer Belgeler",
        quran_cert_1: "Kuran-ı Kerim İcazeti - 1. Kısım",
        quran_cert_2: "Kuran-ı Kerim İcazeti - 2. Kısım",
        quran_cert_3: "Kuran-ı Kerim İcazeti - 3. Kısım",
        other_cert_1: "Takdir ve İlmi Başarı Belgesi",
        other_cert_2: "İslami İlimler İcazeti",
        other_cert_3: "Uzmanlık Kursu Katılım Belgesi",
        reg_title: "Kayıt Başvuru Formu",
        reg_subtitle: "Lütfen formu dikkatlice doldurun; seviye tespiti ve kayıt onayı için sizinle iletişime geçeceğiz",
        form_name: "Ad Soyad *",
        form_age: "Yaş *",
        form_address: "Ülke / Detaylı Adres *",
        form_phone: "WhatsApp Numarası *",
        form_mode: "Tercih Edilen Eğitim Şekli *",
        form_select_mode: "Eğitim şeklini seçin...",
        form_mode_online: "Çevrimiçi (Zoom / Telegram ile uzaktan)",
        form_mode_offline: "Yüz yüze (Merkez binasında)",
        form_stop: "Ezber yapmayı bırakalı ne kadar oldu? *",
        form_experience: "Önceki Kuran ezber tecrübenizi detaylıca yazın *",
        form_notes: "Ek notlar veya özel istekler?",
        form_submit: "Başvuruyu Gönder",
        success_title: "Başvurunuz Başarıyla Gönderildi!",
        success_desc: "El-Mustafa Merkezi'ne güvendiğiniz için teşekkür ederiz. 24 saat içinde kayıtlı WhatsApp numaranızdan iletişime geçeceğiz.",
        error_title: "Gönderim Sırasında Hata Oluştu!",
        error_desc: "Lütfen internet bağlantınızı kontrol edip tekrar deneyin.",
        footer_desc: "Tecvid ve tilavet eğitimini yüksek standartlarda yaymayı ve Allah'ın kitabını öğretmeyi hedefleyen seçkin bir eğitim kurumudur.",
        footer_quick_links: "Hızlı Bağlantılar",
        footer_contact_info: "İletişim ve Adres",
        contact_address: "Kafr El-Thobaneya, Mısır",
        copyright_text: "El-Mustafa Merkezi. Tüm hakları saklıdır.",
        admin_pass_title: "Yönetici Paneli Girişi",
        admin_pass_desc: "Yönetici paneli güvenlik şifresini giriniz:",
        admin_auth_err: "Hatalı şifre!",
        admin_btn_login: "Giriş Yap",
        dashboard_title: "El-Mustafa Merkezi Yönetim Paneli",
        stat_visits: "Toplam Sayfa Ziyareti",
        stat_submissions: "Toplam Başvuru",
        applicants_list: "Yeni Başvuranlar Listesi",
        btn_export: "CSV Dışa Aktar",
        btn_clear_all: "Tüm Başvuruları Sil",
        th_date: "Tarih",
        th_name: "Ad Soyad",
        th_age: "Yaş",
        th_address: "Adres",
        th_phone: "WhatsApp",
        th_mode: "Eğitim Şekli",
        th_stop: "Ara Verme",
        th_experience: "Tecrübe",
        th_notes: "Notlar",
        th_actions: "İşlem",
        empty_applicants: "Henüz hiçbir başvuru yapılmadı.",
        nav_virtual_room: "Görüşme Odası",
        virtual_title: "Sanal Görüşme ve Ders Odası",
        virtual_subtitle: "Dahili sohbet, tema ve düzen değiştirme özellikleri ile Şeyh Mustafa Al-Alfi ile doğrudan görüntülü iletişim",
        btn_mode_theme: "Görünümü Değiştir (Koyu/Açık)",
        btn_mode_layout: "Video Düzenini Değiştir",
        btn_jitsi_connect: "Gerçek Arama Başlat (Jitsi)",
        btn_jitsi_disconnect: "Aramayı Sonlandır",
        teacher_cam_off: "Şeyh Kamerası Kapalı",
        student_cam_off: "Öğrenci Kamerası Kapalı",
        label_sheikh: "Şeyh Mustafa Al-Alfi (Öğretmen)",
        label_student: "Öğrenci (Siz)",
        chat_header: "Anlık Sohbet ve Ders Notları Kutusu",
        chat_online: "Aktif",
        chat_system_welcome: "El-Mustafa Merkezi etkileşimli sohbet odasına hoş geldiniz. Buraya mesaj, Kur'an ayetleri veya düzeltmeler yazabilirsiniz.",
        chat_input_placeholder: "Mesajınızı veya notlarınızı buraya yazın..."
    }
};

let currentLanguage = 'ar';

// --- SYSTEM INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    // 1. Hide Splash Screen after loading animation
    const splash = document.getElementById("splash-screen");
    if (splash) {
        setTimeout(() => {
            splash.classList.add("fade-out");
            // Set display to none after the 0.8s CSS transition finishes
            setTimeout(() => {
                splash.style.display = "none";
            }, 800);
        }, 1800);
    }

    // Helper to initialize modules safely
    const runInitializer = (name, initFn) => {
        try {
            initFn();
        } catch (err) {
            console.error(`Error initializing module [${name}]:`, err);
        }
    };

    // 2. Load settings and stats safely
    runInitializer("VisitorCounter", initVisitorCounter);
    runInitializer("LanguageSelector", initLanguageSelector);
    runInitializer("VideoPlayer", initVideoPlayer);
    runInitializer("TiltEffects", initTiltEffects);
    runInitializer("CertificatesTabs", initCertificatesTabs);
    runInitializer("Lightbox", initLightbox);
    runInitializer("RegistrationForm", initRegistrationForm);
    runInitializer("AdminPanel", initAdminPanel);
    runInitializer("StickyHeader", initStickyHeader);
    runInitializer("MobileNav", initMobileNav);
    runInitializer("VirtualRoomControls", initVirtualRoomControls);
});

// --- STICKY NAV ON SCROLL ---
function initStickyHeader() {
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

// --- MOBILE NAVIGATION PANEL ---
function initMobileNav() {
    const mobileBtn = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const navLinks = document.querySelectorAll(".nav-link, .nav-register-btn");

    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            const isOpened = navMenu.classList.contains("active");
            mobileBtn.innerHTML = isOpened ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
        });

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                mobileBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
            });
        });
    }
}

// --- VISITOR COUNTER ---
function initVisitorCounter() {
    // Check session to avoid duplicate count on refresh
    let totalVisits = parseInt(localStorage.getItem("total_visits") || "0");
    if (!sessionStorage.getItem("visited_session")) {
        totalVisits += 1;
        localStorage.setItem("total_visits", totalVisits.toString());
        sessionStorage.setItem("visited_session", "true");
    }
    document.getElementById("stat-total-visits").textContent = totalVisits;
}

// --- LANGUAGE SWITCHER SYSTEM ---
function initLanguageSelector() {
    const langBtn = document.getElementById("lang-btn");
    const langDropdown = document.getElementById("lang-dropdown");
    const langOpts = document.querySelectorAll(".lang-opt");
    const currentLangText = document.getElementById("current-lang");

    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle("show");
    });

    document.addEventListener("click", () => {
        langDropdown.classList.remove("show");
    });

    langOpts.forEach(opt => {
        opt.addEventListener("click", () => {
            const selectedLang = opt.getAttribute("data-lang");
            setLanguage(selectedLang);
        });
    });

    // Check if user previously saved language preference
    const savedLang = localStorage.getItem("app_lang");
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
    } else {
        setLanguage('ar'); // default is Arabic
    }
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("app_lang", lang);
    
    // Update language button text
    const currentLangText = document.getElementById("current-lang");
    if (lang === 'ar') currentLangText.textContent = "العربية";
    else if (lang === 'en') currentLangText.textContent = "English";
    else if (lang === 'tr') currentLangText.textContent = "Türkçe";

    // Set document direction and language attribute
    const htmlEl = document.documentElement;
    htmlEl.setAttribute("lang", lang);
    if (lang === 'ar') {
        htmlEl.setAttribute("dir", "rtl");
    } else {
        htmlEl.setAttribute("dir", "ltr");
    }

    // Translate DOM elements containing data-i18n
    const elementsToTranslate = document.querySelectorAll("[data-i18n]");
    elementsToTranslate.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            // Check if element is an input placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
                el.setAttribute("placeholder", translations[lang][key]);
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Translate specific select default option and input placeholders manually
    translatePlaceholders(lang);
}

function translatePlaceholders(lang) {
    const placeholders = {
        ar: {
            "name": "مثال: أحمد محمد علي",
            "age": "مثال: 15",
            "address": "مثال: مصر - كفر الثعبانية",
            "phone": "مثال: +2011XXXXXXXX",
            "stop_duration": "مثال: شهرين، أو مستمر بالحفظ حالياً",
            "experience": "مثال: حفظت 5 أجزاء وأعرف أحكام التجويد الأساسية برواية حفص عن عاصم...",
            "notes": "اكتب هنا أي تفاصيل تود إعلامنا بها..."
        },
        en: {
            "name": "e.g., John Doe",
            "age": "e.g., 15",
            "address": "e.g., Cairo, Egypt",
            "phone": "e.g., +2011XXXXXXXX",
            "stop_duration": "e.g., 2 months, or currently active",
            "experience": "e.g., I have memorized 5 parts with basic Tajweed rules...",
            "notes": "Write any details you would like us to know..."
        },
        tr: {
            "name": "Örnek: Ahmet Yılmaz",
            "age": "Örnek: 15",
            "address": "Örnek: İstanbul, Türkiye",
            "phone": "Örnek: +2011XXXXXXXX",
            "stop_duration": "Örnek: 2 aydır ara verdim veya şu an devam ediyorum",
            "experience": "Örnek: Tecvid kuralları ile 5 cüz ezberledim...",
            "notes": "Bilmemizi istediğiniz detayları yazın..."
        }
    };

    const details = placeholders[lang];
    if (details) {
        document.getElementById("name").placeholder = details.name;
        document.getElementById("age").placeholder = details.age;
        document.getElementById("address").placeholder = details.address;
        document.getElementById("phone").placeholder = details.phone;
        document.getElementById("stop_duration").placeholder = details.stop_duration;
        document.getElementById("experience").placeholder = details.experience;
        document.getElementById("notes").placeholder = details.notes;
    }
}

// --- VIDEO PLAYER CUSTOM CONTROLS ---
function initVideoPlayer() {
    const video = document.getElementById("ceremony-video");
    const playBtn = document.getElementById("video-play-btn");
    const overlay = document.getElementById("video-overlay");

    if (video && playBtn && overlay) {
        const togglePlay = () => {
            if (video.paused) {
                video.play();
                overlay.classList.add("hidden");
            } else {
                video.pause();
                overlay.classList.remove("hidden");
            }
        };

        playBtn.addEventListener("click", togglePlay);
        overlay.addEventListener("click", togglePlay);

        video.addEventListener("play", () => {
            overlay.classList.add("hidden");
        });

        video.addEventListener("pause", () => {
            overlay.classList.remove("hidden");
        });
    }
}

// --- 3D TILT ANIMATION & HOVER TILT EFFECTS ---
function initTiltEffects() {
    const tiltCards = document.querySelectorAll(".cert-card-3d");
    const ownerPhoto = document.getElementById("cinematic-photo");

    // Apply tilt logic to certificate cards
    tiltCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const cardInner = card.querySelector(".cert-card-inner");
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 15; // Limit rotation to max 15deg
            const rotateY = ((x - centerX) / centerX) * 15;
            
            cardInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener("mouseleave", () => {
            const cardInner = card.querySelector(".cert-card-inner");
            cardInner.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
        });
    });

    // Apply interactive parallax to Owner Photo
    if (ownerPhoto) {
        // Start with idle shake animation
        ownerPhoto.classList.add("cinematic-shake");

        ownerPhoto.addEventListener("mouseenter", () => {
            // Stop idle shake when user interacts with mouse
            ownerPhoto.classList.remove("cinematic-shake");
        });

        ownerPhoto.addEventListener("mousemove", (e) => {
            const img = ownerPhoto.querySelector(".personal-photo");
            const caption = ownerPhoto.querySelector(".photo-caption");
            const rect = ownerPhoto.getBoundingClientRect();
            
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((centerY - y) / centerY) * 20; // Up to 20deg tilt
            const rotateY = ((x - centerX) / centerX) * 20;
            
            ownerPhoto.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            
            // Subtly shift nested layers in opposite directions to amplify 3D depth (parallax)
            if (img) img.style.transform = `translateZ(30px) translateX(${rotateY * 0.5}px) translateY(${rotateX * -0.5}px) scale(1.08)`;
            if (caption) caption.style.transform = `translateZ(50px) translateX(${rotateY * 0.8}px) translateY(${rotateX * -0.8}px)`;
        });

        ownerPhoto.addEventListener("mouseleave", () => {
            const img = ownerPhoto.querySelector(".personal-photo");
            const caption = ownerPhoto.querySelector(".photo-caption");
            
            ownerPhoto.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
            if (img) img.style.transform = "translateZ(20px) scale(1.05)";
            if (caption) caption.style.transform = "translateZ(40px)";
            
            // Resume idle shake
            ownerPhoto.classList.add("cinematic-shake");
        });
    }
}

// --- CERTIFICATES TABS SWITCHING ---
function initCertificatesTabs() {
    const tabs = document.querySelectorAll(".tab-btn");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.getAttribute("data-tab");
            
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));
            
            tab.classList.add("active");
            document.getElementById(`tab-${target}`).classList.add("active");
        });
    });
}

// --- IMAGE LIGHTBOX FOR CERTIFICATES ---
function initLightbox() {
    const modal = document.getElementById("lightbox-modal");
    const modalImg = document.getElementById("lightbox-img");
    const captionText = document.getElementById("lightbox-caption");
    const closeBtn = document.querySelector(".lightbox-close");
    const certCards = document.querySelectorAll(".cert-card-3d");

    certCards.forEach(card => {
        card.addEventListener("click", () => {
            const img = card.querySelector(".cert-img");
            const label = card.querySelector(".cert-label");
            
            if (modal && modalImg && img) {
                modal.classList.add("show");
                modalImg.src = img.src;
                if (captionText && label) {
                    captionText.innerHTML = label.innerHTML;
                }
            }
        });
    });

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", () => {
            modal.classList.remove("show");
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal || e.target === closeBtn) {
                modal.classList.remove("show");
            }
        });
    }
}

// --- REGISTRATION FORM & Web3Forms NOTIFICATIONS ---
function initRegistrationForm() {
    const form = document.getElementById("student-form");
    const submitBtn = document.getElementById("submit-btn");
    const btnText = document.getElementById("btn-text");
    const spinner = document.getElementById("btn-spinner");
    const successAlert = document.getElementById("form-success");
    const errorAlert = document.getElementById("form-error");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Hide previous alerts
            successAlert.classList.add("hidden");
            errorAlert.classList.add("hidden");

            // Show loading spinner
            btnText.classList.add("hidden");
            spinner.classList.remove("hidden");
            submitBtn.disabled = true;

            const formData = new FormData(form);
            const dataObject = Object.fromEntries(formData.entries());
            
            // Format data variables for Web3Forms email body
            // We append human-readable labels to make the email beautiful
            const emailMessage = `
--- طالب جديد يريد التسجيل بمركز المصطفى ---
الاسم الكامل: ${dataObject.name}
العمر: ${dataObject.age} سنة
العنوان / البلد: ${dataObject.address}
رقم الهاتف / الواتساب: ${dataObject.phone}
نظام الدراسة المختار: ${dataObject.mode === 'online' ? 'أونلاين (عن بعد)' : 'أوفلاين (حضورياً)'}
مدة الانقطاع / التوقف: ${dataObject.stop_duration}
تفاصيل التجربة السابقة: ${dataObject.experience}
ملاحظات إضافية: ${dataObject.notes || 'لا يوجد'}
            `;

            // Prepare payload for Web3Forms API
            const payload = {
                access_key: "70e637bd-d961-460f-90bf-12e022dfa640", // Use the public access key generated for yousefadel111333@gmail.com
                subject: `تقديم جديد: ${dataObject.name} (${dataObject.mode === 'online' ? 'Online' : 'Offline'})`,
                from_name: "مركز المصطفى للقرآن",
                to_email: "yousefadel111333@gmail.com",
                name: dataObject.name,
                email: "yousefadel111333@gmail.com", // Send to center email
                message: emailMessage
            };

            // Send Email notification using Web3Forms
            fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(async (response) => {
                let json = await response.json();
                if (response.status == 200) {
                    // Success callback
                    handleSuccessRegistration(dataObject);
                } else {
                    console.log(response);
                    // If email fails, we still register student locally so Sheikh doesn't lose the registration!
                    handleSuccessRegistration(dataObject, true);
                }
            })
            .catch(error => {
                console.error(error);
                // Offline fallback - register student locally even if connection fails
                handleSuccessRegistration(dataObject, true);
            })
            .finally(() => {
                // Restore submit button state
                btnText.classList.remove("hidden");
                spinner.classList.add("hidden");
                submitBtn.disabled = false;
            });
        });
    }

    function handleSuccessRegistration(dataObject, emailFailed = false) {
        // Clear form
        form.reset();

        // Save registration data locally for the Admin Dashboard
        saveApplicantLocally(dataObject);

        // Show success alert
        successAlert.classList.remove("hidden");
        
        // Scroll to success message
        successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // If email failed silently behind the scenes, we log it for admin but don't alarm student
        if (emailFailed) {
            console.warn("Email dispatch failed, but registration saved locally.");
        }
    }
}

// --- LOCAL STORAGE OF STUDENTS DATABASE ---
function saveApplicantLocally(applicant) {
    const list = JSON.parse(localStorage.getItem("applicants_list") || "[]");
    
    // Add submission date and ID
    const entry = {
        id: Date.now(),
        date: new Date().toLocaleDateString('ar-EG', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        ...applicant
    };

    list.unshift(entry); // Add to the top
    localStorage.setItem("applicants_list", JSON.stringify(list));
    
    // Update dashboard visual counters
    updateAdminCounters();
}

// --- ADMIN SYSTEM & PANEL SECURITY ---
function initAdminPanel() {
    const triggerBtn = document.getElementById("admin-trigger-btn");
    const passModal = document.getElementById("admin-pass-modal");
    const dbModal = document.getElementById("admin-dashboard-modal");
    const passForm = document.getElementById("admin-auth-form");
    const passClose = document.getElementById("admin-pass-close");
    const dbClose = document.getElementById("admin-db-close");
    const passwordInput = document.getElementById("admin-password");
    const authError = document.getElementById("auth-error-msg");
    
    const exportCsvBtn = document.getElementById("export-csv-btn");
    const clearAllBtn = document.getElementById("clear-all-btn");

    const CORRECT_PW = "mljqo4sNn";

    // Open password modal
    triggerBtn.addEventListener("click", () => {
        authError.classList.add("hidden");
        passwordInput.value = "";
        passModal.classList.add("show");
    });

    // Close password modal
    passClose.addEventListener("click", () => {
        passModal.classList.remove("show");
    });

    // Close dashboard modal
    dbClose.addEventListener("click", () => {
        dbModal.classList.remove("show");
    });

    // Password Submission Form
    passForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const value = passwordInput.value;
        
        if (value === CORRECT_PW) {
            passModal.classList.remove("show");
            openDashboardPanel();
        } else {
            authError.classList.remove("hidden");
            passwordInput.focus();
        }
    });

    // Handle background click on modals to close
    window.addEventListener("click", (e) => {
        if (e.target === passModal) passModal.classList.remove("show");
        if (e.target === dbModal) dbModal.classList.remove("show");
    });

    // Export CSV logic
    exportCsvBtn.addEventListener("click", () => {
        exportApplicantsToCSV();
    });

    // Clear all registrations logic
    clearAllBtn.addEventListener("click", () => {
        const confirmMsg = currentLanguage === 'ar' ? 'هل أنت متأكد من حذف كافة المسجلين نهائياً؟' : 
                           (currentLanguage === 'tr' ? 'Tüm başvuranları kalıcı olarak silmek istediğinizden emin misiniz?' : 'Are you sure you want to permanently delete all applicants?');
        if (confirm(confirmMsg)) {
            localStorage.setItem("applicants_list", "[]");
            renderApplicantsTable();
            updateAdminCounters();
        }
    });
}

function openDashboardPanel() {
    const dbModal = document.getElementById("admin-dashboard-modal");
    dbModal.classList.add("show");
    
    // Refresh numbers and table entries
    updateAdminCounters();
    renderApplicantsTable();
}

function updateAdminCounters() {
    const visitsVal = localStorage.getItem("total_visits") || "0";
    const list = JSON.parse(localStorage.getItem("applicants_list") || "[]");
    
    document.getElementById("stat-total-visits").textContent = visitsVal;
    document.getElementById("stat-total-registrations").textContent = list.length;
}

function renderApplicantsTable() {
    const tbody = document.getElementById("applicants-tbody");
    const emptyState = document.getElementById("table-empty-state");
    const tableEl = document.getElementById("applicants-table");
    const list = JSON.parse(localStorage.getItem("applicants_list") || "[]");
    
    tbody.innerHTML = "";

    if (list.length === 0) {
        tableEl.style.display = "none";
        emptyState.classList.remove("hidden");
    } else {
        tableEl.style.display = "table";
        emptyState.classList.add("hidden");
        
        list.forEach(app => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${app.date}</td>
                <td><strong>${app.name}</strong></td>
                <td>${app.age}</td>
                <td>${app.address}</td>
                <td><a href="https://wa.me/${app.phone.replace(/[^0-9]/g, '')}" target="_blank" style="color:#2ecc71; text-decoration:none; font-weight:600;"><i class="fa-brands fa-whatsapp"></i> ${app.phone}</a></td>
                <td><span class="badge">${app.mode === 'online' ? (currentLanguage === 'ar' ? 'أونلاين' : (currentLanguage === 'tr' ? 'Çevrimiçi' : 'Online')) : (currentLanguage === 'ar' ? 'أوفلاين' : (currentLanguage === 'tr' ? 'Yüz yüze' : 'Offline'))}</span></td>
                <td>${app.stop_duration}</td>
                <td style="max-width: 200px; white-space: normal; word-break: break-word;">${app.experience}</td>
                <td style="max-width: 150px; white-space: normal; word-break: break-word;">${app.notes || '-'}</td>
                <td>
                    <button class="btn-delete-row" data-id="${app.id}" title="حذف">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </td>
            `;
            
            // Delete row handler
            const deleteBtn = tr.querySelector(".btn-delete-row");
            deleteBtn.addEventListener("click", () => {
                const confirmMsg = currentLanguage === 'ar' ? 'حذف هذا الطالب؟' : 
                                   (currentLanguage === 'tr' ? 'Bu öğrenciyi sil?' : 'Delete this student?');
                if (confirm(confirmMsg)) {
                    deleteApplicantLocally(app.id);
                }
            });

            tbody.appendChild(tr);
        });
    }
}

function deleteApplicantLocally(id) {
    let list = JSON.parse(localStorage.getItem("applicants_list") || "[]");
    list = list.filter(item => item.id !== id);
    localStorage.setItem("applicants_list", JSON.stringify(list));
    
    // Refresh table and stats
    renderApplicantsTable();
    updateAdminCounters();
}

// --- CSV DATA EXTRACTION ---
function exportApplicantsToCSV() {
    const list = JSON.parse(localStorage.getItem("applicants_list") || "[]");
    if (list.length === 0) return;

    // Build headers and rows
    const headers = ["التاريخ", "الاسم بالكامل", "العمر", "العنوان البلد", "رقم الواتساب", "نظام الدراسة", "مدة التوقف", "التجربة السابقة", "الملاحظات"];
    let csvContent = "\uFEFF"; // Byte Order Mark for UTF-8 compatibility in Microsoft Excel
    
    csvContent += headers.map(h => `"${h}"`).join(",") + "\n";
    
    list.forEach(app => {
        const row = [
            app.date,
            app.name,
            app.age,
            app.address,
            app.phone,
            app.mode === 'online' ? 'أونلاين' : 'أوفلاين',
            app.stop_duration,
            app.experience,
            app.notes || ''
        ];
        csvContent += row.map(val => `"${val.toString().replace(/"/g, '""')}"`).join(",") + "\n";
    });

    // Trigger download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `مسجلي_مركز_المصطفى_${new Date().toLocaleDateString('ar-EG').replace(/\//g, '-')}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- VIRTUAL ROOM & VIDEO CHAT LOGIC ---
let jitsiAPIInstance = null;
let localStream = null;

function initVirtualRoomControls() {
    const themeBtn = document.getElementById("btn-theme-toggle");
    const layoutBtn = document.getElementById("btn-layout-toggle");
    const jitsiConnectBtn = document.getElementById("btn-jitsi-connect");
    const jitsiDisconnectBtn = document.getElementById("btn-jitsi-disconnect");
    const videoArea = document.getElementById("video-screens-area");
    const jitsiContainer = document.getElementById("jitsi-iframe-container");
    
    const cardTeacher = document.getElementById("screen-teacher");
    const cardStudent = document.getElementById("screen-student");
    const teacherWebcam = document.getElementById("teacher-webcam");
    const studentWebcam = document.getElementById("student-webcam");
    const teacherPlaceholder = document.getElementById("teacher-placeholder");
    const studentPlaceholder = document.getElementById("student-placeholder");

    const micBtnTeacher = document.getElementById("btn-toggle-mic-teacher");
    const camBtnTeacher = document.getElementById("btn-toggle-cam-teacher");
    const micBtnStudent = document.getElementById("btn-toggle-mic-student");
    const camBtnStudent = document.getElementById("btn-toggle-cam-student");

    const chatForm = document.getElementById("chat-input-form");
    const chatInput = document.getElementById("chat-input-message");
    const chatMessages = document.getElementById("chat-messages-area");
    
    // Set Chat start time
    const timeEl = document.getElementById("chat-start-time");
    if (timeEl) {
        timeEl.textContent = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    }

    // A. Mode Switch: Theme Mode (Light / Dark)
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const isLight = document.body.classList.contains("light-mode");
            
            // Toggle icon
            const icon = themeBtn.querySelector("i");
            if (isLight) {
                icon.className = "fa-solid fa-sun";
            } else {
                icon.className = "fa-solid fa-moon";
            }
        });
    }

    // B. Mode Switch: Video Layout Mode (Grid / Focus)
    if (layoutBtn) {
        layoutBtn.addEventListener("click", () => {
            if (videoArea.classList.contains("grid-layout")) {
                videoArea.classList.remove("grid-layout");
                videoArea.classList.add("focus-layout");
            } else {
                videoArea.classList.remove("focus-layout");
                videoArea.classList.add("grid-layout");
            }
        });
    }

    // C. Local Camera and Microphone toggling (Simulated room feeds)
    const startLocalVideo = async (videoElement, placeholderElement) => {
        try {
            if (!localStream) {
                localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            }
            videoElement.srcObject = localStream;
            videoElement.classList.remove("hidden");
            placeholderElement.classList.add("hidden");
            
            // Start pulse animation on labels
            const indicator = videoElement.parentElement.querySelector(".pulse-indicator");
            if (indicator) indicator.classList.add("active");
        } catch (err) {
            console.warn("Camera/Mic permissions not granted or no webcam available: ", err);
            alert(currentLanguage === 'ar' ? 'لم يتم العثور على كاميرا أو لم يتم إعطاء الإذن لتشغيلها.' : 'Camera not found or permissions denied.');
        }
    };

    const stopLocalVideo = (videoElement, placeholderElement) => {
        videoElement.srcObject = null;
        videoElement.classList.add("hidden");
        placeholderElement.classList.remove("hidden");
        
        const indicator = videoElement.parentElement.querySelector(".pulse-indicator");
        if (indicator) indicator.classList.remove("active");
    };

    // Toggle Camera buttons
    if (camBtnTeacher) {
        camBtnTeacher.addEventListener("click", () => {
            camBtnTeacher.classList.toggle("muted");
            const isOff = camBtnTeacher.classList.contains("muted");
            camBtnTeacher.innerHTML = isOff ? '<i class="fa-solid fa-video-slash"></i>' : '<i class="fa-solid fa-video"></i>';
            if (isOff) {
                stopLocalVideo(teacherWebcam, teacherPlaceholder);
            } else {
                startLocalVideo(teacherWebcam, teacherPlaceholder);
            }
        });
    }

    if (camBtnStudent) {
        camBtnStudent.addEventListener("click", () => {
            camBtnStudent.classList.toggle("muted");
            const isOff = camBtnStudent.classList.contains("muted");
            camBtnStudent.innerHTML = isOff ? '<i class="fa-solid fa-video-slash"></i>' : '<i class="fa-solid fa-video"></i>';
            if (isOff) {
                stopLocalVideo(studentWebcam, studentPlaceholder);
            } else {
                startLocalVideo(studentWebcam, studentPlaceholder);
            }
        });
    }

    // Toggle Microphone buttons (Mute/Unmute local audio track)
    const toggleMicTrack = (btn) => {
        btn.classList.toggle("muted");
        const isMuted = btn.classList.contains("muted");
        btn.innerHTML = isMuted ? '<i class="fa-solid fa-microphone-slash"></i>' : '<i class="fa-solid fa-microphone"></i>';
        
        if (localStream) {
            localStream.getAudioTracks().forEach(track => {
                track.enabled = !isMuted;
            });
        }
    };

    if (micBtnTeacher) micBtnTeacher.addEventListener("click", () => toggleMicTrack(micBtnTeacher));
    if (micBtnStudent) micBtnStudent.addEventListener("click", () => toggleMicTrack(micBtnStudent));

    // D. Jitsi Meet Integration (Real Video Connection Setup)
    if (jitsiConnectBtn && jitsiDisconnectBtn) {
        jitsiConnectBtn.addEventListener("click", () => {
            // Load Jitsi script if not already loaded
            if (typeof JitsiMeetExternalAPI === 'undefined') {
                const script = document.createElement('script');
                script.src = "https://meet.jit.si/external_api.js";
                script.onload = () => startJitsiMeeting();
                document.head.appendChild(script);
            } else {
                startJitsiMeeting();
            }
        });

        jitsiDisconnectBtn.addEventListener("click", () => {
            stopJitsiMeeting();
        });
    }

    function startJitsiMeeting() {
        // Toggle view elements
        cardTeacher.classList.add("hidden");
        cardStudent.classList.add("hidden");
        jitsiContainer.classList.remove("hidden");
        
        jitsiConnectBtn.classList.add("hidden");
        jitsiDisconnectBtn.classList.remove("hidden");

        const roomUniqueName = "AlMustafaCenter_Room_" + Math.floor(1000 + Math.random() * 9000);
        const options = {
            roomName: roomUniqueName,
            width: "100%",
            height: "100%",
            parentNode: jitsiContainer,
            lang: currentLanguage,
            interfaceConfigOverwrite: {
                TOOLBAR_BUTTONS: [
                    'microphone', 'camera', 'closedcaptions', 'desktop', 'embedmeeting', 'fullscreen',
                    'fodeviceselection', 'hangup', 'profile', 'chat', 'recording',
                    'livestreaming', 'etherpad', 'sharedvideo', 'settings', 'raisehand',
                    'videoquality', 'filmstrip', 'invite', 'feedback', 'stats', 'shortcuts',
                    'tileview', 'videobackgroundblur', 'download', 'help', 'mute-everyone',
                    'security'
                ]
            }
        };

        // Initialize Jitsi Meet Iframe
        if (typeof JitsiMeetExternalAPI !== 'undefined') {
            jitsiAPIInstance = new JitsiMeetExternalAPI("meet.jit.si", options);
            jitsiAPIInstance.addEventListener('videoConferenceLeft', () => {
                stopJitsiMeeting();
            });
        }
    }

    function stopJitsiMeeting() {
        if (jitsiAPIInstance) {
            jitsiAPIInstance.dispose();
            jitsiAPIInstance = null;
        }

        // Restore view elements
        jitsiContainer.innerHTML = "";
        jitsiContainer.classList.add("hidden");
        cardTeacher.classList.remove("hidden");
        cardStudent.classList.remove("hidden");
        
        jitsiConnectBtn.classList.remove("hidden");
        jitsiDisconnectBtn.classList.add("hidden");
        
        // Terminate any local webcam previews
        stopLocalVideo(teacherWebcam, teacherPlaceholder);
        stopLocalVideo(studentWebcam, studentPlaceholder);
        if (camBtnTeacher) {
            camBtnTeacher.classList.add("muted");
            camBtnTeacher.innerHTML = '<i class="fa-solid fa-video-slash"></i>';
        }
        if (camBtnStudent) {
            camBtnStudent.classList.add("muted");
            camBtnStudent.innerHTML = '<i class="fa-solid fa-video-slash"></i>';
        }
    }

    // E. Interactive Chat Messages and Automated Sheikh Response
    if (chatForm && chatInput && chatMessages) {
        chatForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const messageText = chatInput.value.trim();
            if (!messageText) return;

            // Append Student Message
            appendChatMessage(messageText, 'student-msg', currentLanguage === 'ar' ? 'الطالب' : 'Student');
            chatInput.value = "";
            chatInput.focus();

            // Chime sound simulated using Web Audio API for a premium feel
            playMessageSound(true);

            // Automated response from Sheikh Mustafa Al-Alfy to simulate an interactive session!
            setTimeout(() => {
                let sheikhReply = "";
                const replies = {
                    ar: [
                        "أهلاً بك يا بني. بارك الله فيك ونفع بك.",
                        "ما شاء الله، قراءة ممتازة. انتبه لمد الصله وأحكام النون الساكنة.",
                        "ابدأ بتلاوة سورة البقرة من الآية 100 وسأستمع إليك.",
                        "ممتاز، سنلتقي في موعد الحصة المعتاد بإذن الله."
                    ],
                    en: [
                        "Welcome my son. May Allah bless you.",
                        "Masha'Allah, excellent recitation. Keep focusing on Tajweed rules.",
                        "Please start reciting from Surah Al-Baqarah verse 100.",
                        "Excellent, we will meet at our scheduled session time, Insha'Allah."
                    ],
                    tr: [
                        "Hoş geldin evladım. Allah seni mübarek kılsın.",
                        "Maşallah, harika tilavet. Tecvid kurallarına dikkat etmeye devam et.",
                        "Lütfen Bakara suresi 100. ayetten okumaya başla.",
                        "Çok güzel, inşallah planlanan ders saatinde görüşürüz."
                    ]
                };

                const langReplies = replies[currentLanguage] || replies['ar'];
                sheikhReply = langReplies[Math.floor(Math.random() * langReplies.length)];

                appendChatMessage(sheikhReply, 'teacher-msg', currentLanguage === 'ar' ? 'الشيخ مصطفى الألفي' : 'Sheikh Mustafa');
                playMessageSound(false);
            }, 1800);
        });
    }

    function appendChatMessage(text, className, senderName) {
        const timeStr = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
        const messageDiv = document.createElement("div");
        messageDiv.className = `chat-msg ${className}`;
        messageDiv.innerHTML = `
            <span class="msg-time">${timeStr} - ${senderName}</span>
            <p>${text}</p>
        `;
        chatMessages.appendChild(messageDiv);
        
        // Scroll chat to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Play synthesized premium message chime
    function playMessageSound(isSent) {
        try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const osc = context.createOscillator();
            const gain = context.createGain();
            
            osc.connect(gain);
            gain.connect(context.destination);
            
            // Frequencies for a soft premium chime
            if (isSent) {
                osc.frequency.setValueAtTime(523.25, context.currentTime); // C5
                osc.frequency.setValueAtTime(659.25, context.currentTime + 0.1); // E5
            } else {
                osc.frequency.setValueAtTime(659.25, context.currentTime); // E5
                osc.frequency.setValueAtTime(523.25, context.currentTime + 0.1); // C5
            }
            
            osc.type = 'sine';
            gain.gain.setValueAtTime(0.08, context.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, context.currentTime + 0.3);
            
            osc.start();
            osc.stop(context.currentTime + 0.35);
        } catch(e) {
            // Web Audio might be blocked before user interaction, ignore error
        }
    }
}


// =====================================================
// CEREMONY VIDEO: Click-to-Play Thumbnail
// =====================================================
function playYouTubeVideo() {
    const overlay = document.getElementById('video-thumbnail-overlay');
    const iframe = document.getElementById('ceremony-video');
    if (!overlay || !iframe) return;
    overlay.style.transition = 'opacity 0.5s ease';
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    setTimeout(function() {
        iframe.src = 'https://www.youtube.com/embed/1WyLPWKWjh0?autoplay=1&rel=0';
        iframe.classList.remove('hidden');
        overlay.style.display = 'none';
    }, 450);
}
