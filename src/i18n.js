import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {

    en: {
        translation: {
            nav: {
                home: "Home",
                about: "About",
                services: "Services",
                blogs: "Blogs",
                faq: "FAQ",
                contact: "Contact",
                login: "Login",
                register: "Register"
            },

            footer: {
                aboutText: "An integrated platform for managing clinics, hospitals, and medical centers easily and professionally.",
                dashboardServices: "Dashboard Services",
                facilities: "Facility Management",
                doctors: "Doctor Management",
                appointments: "Appointment Scheduling",
                documents: "Document Upload",

                quickLinks: "Quick Links",

                newsletterTitle: "Subscribe to our Newsletter",
                emailPlaceholder: "Enter your email",
                subscribe: "Subscribe",

                rights: "All rights reserved."
            },
            common: {
                save: "Save",
                ChooseFile: "Choose File",
                learnMore: "Learn More",
                getStarted: "Start Your Registration",
                send: "Send Message",
                sending: "Sending...",
                name: "Your Name",
                email: "Your Email",
                message: "Your Message",
                readMore: "Read More",
                noFacilities: "No facilities",
            },

            about: {
                platform: "Medical Platform",
                title: "Smart Management System for Clinics & Medical Centers",
                desc1: "Our platform helps clinics manage patients, appointments and medical records through a modern dashboard.",
                desc2: "Built to improve healthcare workflow and give doctors better tools."
            },

            contact: {
                title: "Contact Us",
                desc: "If you have any questions about the medical platform or need help managing your clinic dashboard, send us a message.",
                success: "Message sent successfully"
            },

            features: {
                title: "Our Features",

                securityTitle: "Data Security",
                securityDesc: "Advanced protection system for patient and clinic data.",

                timeTitle: "Time Management",
                timeDesc: "Manage appointments and schedules efficiently.",

                qualityTitle: "Service Quality",
                qualityDesc: "Track performance and maintain high healthcare standards.",

                verifyTitle: "Document Verification",
                verifyDesc: "Review clinic documents to ensure compliance.",

                careTitle: "Patient Care",
                careDesc: "Improve patient experience and appointment management."
            },

            services: {
                title: "Our Services",
                subtitle: "Integrated solutions for managing clinics and medical facilities",

                hospitalTitle: "Medical Facilities",
                hospitalDesc: "Manage hospitals and large healthcare facilities easily.",

                clinicGroupTitle: "Clinic Complex",
                clinicGroupDesc: "Manage multiple clinics and departments.",

                privateClinicTitle: "Private Clinics",
                privateClinicDesc: "Complete system for managing private medical practices.",

                scheduleTitle: "Doctor Scheduling",
                scheduleDesc: "Organize doctor appointments and schedules.",

                bookingTitle: "Patient Booking",
                bookingDesc: "Manage patient reservations professionally.",

                verifyTitle: "Medical Documents Verification",
                verifyDesc: "Verify clinic documents to ensure quality.",

                title: "Our Medical Services",
                subtitle: "Comprehensive solutions for managing hospitals, clinics, and medical facilities"
            },

            specialties: {
                title: "Medical Specialties",

                cardioTitle: "Cardiology",
                cardioDesc: "Diagnosis and treatment of heart diseases.",

                pediatricsTitle: "Pediatrics",
                pediatricsDesc: "Healthcare for children.",

                eyeTitle: "Ophthalmology",
                eyeDesc: "Eye care and vision treatment.",

                neuroTitle: "Neurology",
                neuroDesc: "Treatment of nervous system disorders.",

                orthoTitle: "Orthopedics",
                orthoDesc: "Bone and joint treatment.",

                dentalTitle: "Dentistry",
                dentalDesc: "Oral and dental healthcare.",

                labTitle: "Medical Labs",
                labDesc: "Laboratory medical testing.",

                radiologyTitle: "Radiology",
                radiologyDesc: "Disease diagnosis using imaging.",

                icuTitle: "Intensive Care",
                icuDesc: "Critical patient monitoring.",

                internalTitle: "Internal Medicine",
                internalDesc: "Diagnosis of internal diseases."
            },

            home: {
                heroTitle: "A Smart Platform Connecting Patients with Medical Providers",
                heroDesc:
                    "Our platform acts as a trusted bridge between patients and healthcare providers such as clinics and medical centers. Facility owners can register their clinics, upload verification documents, and choose suitable subscription packages. Doctors can manage their schedules while patients easily find and book appointments. Every new registered facility enjoys a 60-day free trial after approval.",
            },

            blog: {
                title: "Tabibak Blog",
                subtitle: "Discover articles and tips about managing clinics and healthcare facilities",

                post1Title: "Managing Medical Appointments Easily",
                post1Desc: "Effective ways to organize appointments in clinics and hospitals.",

                post2Title: "Improving Patient Experience",
                post2Desc: "Best practices to make patient journeys smoother.",

                post3Title: "Medical Data Security",
                post3Desc: "How to protect patient and clinic data."
            },

            faq: {
                title: "Frequently Asked Questions",
                subtitle: "We are here to answer the most common questions about our medical platform"
            },

            sidebar: {
                dashboard: "Dashboard",
                short: "DB",
                home: "Home",
                profile: "Profile",
                facilities: "Facilities",
                doctors: "doctors",
            },

            dashboard: {
                home: {
                    title: "Dashboard Home",
                    welcome: "Welcome to your dashboard!"
                },
                profile: {
                    title: "Profile Settings",
                    name: "Name",
                    email: "Email",
                    phone: "Phone",
                    country: "Country",
                    city: "City",
                    providerType: "Provider Type",
                    birthDate: "Birth Date",
                    gender: "Gender",
                    bio: "Bio",
                    updating: "Updating...",
                    updateButton: "Update Profile",
                    updateSuccess: "Profile updated successfully!",
                    updateFail: "Failed to update profile.",
                    changePassword: "Change Password",
                    currentPassword: "Current Password",
                    newPassword: "New Password",
                    confirmNewPassword: "Confirm New Password",
                    changing: "Changing...",
                    changeButton: "Change Password",
                    passwordSuccess: "Password changed successfully!",
                    passwordFail: "Failed to change password.",
                    passwordMismatch: "Passwords do not match!",
                    loading: "Loading profile..."
                },

                "stepBasic": {
                    "nameAr": "Provider Name (Arabic)",
                    "nameEn": "Provider Name (English)",
                    "commercialName": "Commercial Name",
                    "email": "Email",
                    "phone": "Phone",
                    "city": "City",
                    "country": "Country",
                    "description": "Description",
                    "logo": "Logo",
                    "cover": "Cover Image",
                    "saveStep": "Save Step",
                    "saved": "Step saved successfully!",
                    "fillRequired": "Please fill in the required fields"
                },
                "stepLicense": {
                    "licenseNumber": "License Number",
                    "commercialRegister": "Commercial Register",
                    "taxNumber": "Tax Number",
                    "active": "Active",
                    "inactive": "Inactive",
                    "saveStep": "Save Step",
                    "saved": "Step saved successfully!",
                    "fillRequired": "Please fill in the required fields"
                },
                "stepReview": {
                    "title": "Review Facility Info",
                    "name": "Name",
                    "email": "Email",
                    "phone": "Phone",
                    "licenseNumber": "License Number",
                    "subscriptionExpiry": "Subscription Expiry",
                    "documents": "Documents",
                    "saveStep": "Save Step",
                    "saved": "Data saved successfully!",
                    "fillRequired": "Please fill in the required information"
                },
                "steps": {
                    "basic": "Basic Information",
                    "license": "License Information",
                    "documents": "Documents",
                    "review": "Review & Submit",
                    "Next": "Next",
                    "Back": "Back",
                },
                notifications: {
                    success: "Success",
                    error: "Error"
                },
            },
            registration: {
                title: "How to Register Your Medical Facility",
                subtitle:
                    "Follow these simple steps to register your clinic or medical center and start managing appointments with ease.",

                startNow: "Start Registration",

                steps: {
                    step1Title: "Add Facility Information",
                    step1Desc:
                        "Enter the basic information about your clinic or medical center such as name, email, and phone number.",

                    step2Title: "Upload Required Documents",
                    step2Desc:
                        "Upload the official documents required to verify your facility. Our support team will review them.",

                    step3Title: "Choose Your Subscription Package",
                    step3Desc:
                        "Select the subscription package that best fits your facility’s needs.",

                    step4Title: "Document Review",
                    step4Desc:
                        "Our team reviews your documents and notifies you if anything needs correction.",

                    step5Title: "Start Using Your Dashboard",
                    step5Desc:
                        "Once approved, you can access your dashboard, manage doctors, and organize appointments.",
                },
            },
            "stepDocuments": {
                "commercial_register": "Commercial Register",
                "national_id": "National ID",
                "medical_license": "Medical License",
                "hospital_license": "Hospital License",
                "clinic_license": "Clinic License",
                "insurance": "Insurance",
                "experience_certificate": "Experience Certificate",
                "medical_degree": "Medical Degree",
                "upload": "Upload",
                "saveStep": "Save Step",
                "uploaded": "Document uploaded successfully!",
                "failedUpload": "Failed to upload document",
                "fillRequired": "Please upload at least one document"
            },
            "doctor": {
                "load": {
                    "failed": "Failed to load doctors"
                },
                "delete": {
                    "confirm": "Are you sure you want to delete this doctor?",
                    "success": "Doctor deleted successfully",
                    "failed": "Failed to delete doctor"
                },
                "actions": "Actions",
                "view": "View",
                "add": {
                    "submit": "Add Doctor",
                    "title": "Add Doctor",
                    "name": "Full Name",
                    "email": "Email",
                    "phone": "Phone",
                    "specialty": "Specialty",
                    "medical_license": "Medical License",
                    "national_id": "National ID",
                    "insurance": "Insurance Document",
                    "documents": "Documents",
                    "review": "Review & Submit",
                    "success": "Doctor added successfully",
                    "failed": "Failed to add doctor"
                },
                "steps": {
                    "basic": "Basic Info",
                    "documents": "Upload Documents",
                    "review": "Review & Submit"
                },
            },

            facility: {
                name: "Name",
                phone: "Phone",
                email: "Email",
                status: "Status",
            },
        }
    },

    ar: {
        translation: {
            nav: {
                home: "الرئيسية",
                about: "من نحن",
                services: "الخدمات",
                blogs: "المقالات",
                faq: "الأسئلة",
                contact: "اتصل بنا",
                login: "تسجيل الدخول",
                register: "إنشاء حساب"
            },
            footer: {
                aboutText: "منصة متكاملة لإدارة العيادات والمستشفيات والمجمعات الطبية بسهولة واحترافية.",
                dashboardServices: "خدمات لوحة التحكم",
                facilities: "إدارة المنشآت",
                doctors: "إدارة الأطباء",
                appointments: "تنظيم المواعيد",
                documents: "رفع المستندات",

                quickLinks: "روابط سريعة",

                newsletterTitle: "اشترك في النشرة البريدية",
                emailPlaceholder: "ادخل بريدك الإلكتروني",
                subscribe: "اشتراك",

                rights: "جميع الحقوق محفوظة."
            },

            common: {
                save: "حفظ",
                learnMore: "اعرف المزيد",
                getStarted: "ابدأ تسجيل منشأتك",
                send: "إرسال",
                sending: "جاري الإرسال...",
                name: "الاسم",
                email: "البريد الإلكتروني",
                message: "الرسالة",
                readMore: "اقرأ المزيد",
                noFacilities: "لا توجد مرافق",
                ChooseFile: "إختيار الملفات",
            },

            about: {
                platform: "منصة طبية",
                title: "نظام إدارة ذكي للعيادات والمراكز الطبية",
                desc1: "تساعد منصتنا العيادات على إدارة المرضى والمواعيد والسجلات الطبية من خلال لوحة تحكم حديثة وسهلة الاستخدام.",
                desc2: "تم تصميم النظام لتحسين سير العمل في القطاع الطبي وتقليل الجهد اليدوي وتوفير أدوات أفضل للأطباء."
            },

            contact: {
                title: "تواصل معنا",
                desc: "إذا كان لديك أي استفسار حول المنصة الطبية أو تحتاج مساعدة في إدارة عيادتك، أرسل لنا رسالة.",
                success: "تم إرسال الرسالة بنجاح"
            },

            features: {
                title: "مميزاتنا",

                securityTitle: "أمان البيانات",
                securityDesc: "نظام حماية متكامل لحفظ بيانات المرضى والمنشآت بشكل آمن.",

                timeTitle: "تنظيم الوقت",
                timeDesc: "إدارة مواعيد الأطباء والحجوزات بشكل دقيق ومرن.",

                qualityTitle: "جودة الخدمة",
                qualityDesc: "متابعة الأداء وضمان تقديم خدمات طبية عالية الجودة.",

                verifyTitle: "تحقق من الأوراق",
                verifyDesc: "مراجعة مستندات المنشآت والعيادات بدقة.",

                careTitle: "رعاية المرضى",
                careDesc: "تحسين تجربة المرضى وإدارة الحجوزات بسهولة."
            },

            services: {
                title: "خدماتنا",
                subtitle: "نقدم حلولاً متكاملة لإدارة المنشآت الطبية والعيادات بسهولة وكفاءة",

                hospitalTitle: "إنشاء منشآت طبية",
                hospitalDesc: "إدارة وتشغيل المستشفيات والمنشآت الطبية الكبيرة بطريقة ذكية.",

                clinicGroupTitle: "مجمع عيادات طبية",
                clinicGroupDesc: "إدارة مجمعات العيادات وتنظيم الأقسام والتخصصات المختلفة.",

                privateClinicTitle: "عيادات خاصة",
                privateClinicDesc: "نظام متكامل لإدارة العيادات الخاصة وتنظيم العمل اليومي.",

                scheduleTitle: "تنظيم مواعيد الأطباء",
                scheduleDesc: "إدارة جداول الأطباء وتنظيم المواعيد بسهولة.",

                bookingTitle: "إدارة حجوزات المرضى",
                bookingDesc: "متابعة الحجوزات والتأكيد والتنظيم بشكل احترافي.",

                verifyTitle: "التحقق من الأوراق الطبية",
                verifyDesc: "مراجعة أوراق المنشآت والعيادات لضمان الجودة.",

            },

            specialties: {
                title: "التخصصات الطبية",

                cardioTitle: "طب القلب",
                cardioDesc: "تشخيص وعلاج أمراض القلب والشرايين.",

                pediatricsTitle: "طب الأطفال",
                pediatricsDesc: "رعاية صحة الأطفال منذ الولادة.",

                eyeTitle: "طب العيون",
                eyeDesc: "تشخيص وعلاج مشاكل النظر.",

                neuroTitle: "طب الأعصاب",
                neuroDesc: "علاج أمراض الجهاز العصبي.",

                orthoTitle: "طب العظام",
                orthoDesc: "تشخيص وعلاج الكسور والمفاصل.",

                dentalTitle: "طب الأسنان",
                dentalDesc: "العناية بصحة الفم والأسنان.",

                labTitle: "المختبرات الطبية",
                labDesc: "إجراء التحاليل الطبية المختلفة.",

                radiologyTitle: "الأشعة التشخيصية",
                radiologyDesc: "تشخيص الأمراض باستخدام الأشعة.",

                icuTitle: "العناية المركزة",
                icuDesc: "رعاية المرضى في الحالات الحرجة.",

                internalTitle: "الطب الباطني",
                internalDesc: "تشخيص الأمراض الداخلية وعلاجها."
            },

            home: {
                heroTitle: "منصة ذكية تربط المرضى بالمنشآت الطبية",
                heroDesc:
                    "منصتنا تعمل كوسيط موثوق بين المرضى والمنشآت الطبية مثل العيادات والمراكز. يمكن لأصحاب المنشآت تسجيل منشآتهم وإضافة البيانات الأساسية ورفع المستندات المطلوبة للمراجعة ثم اختيار الباقة المناسبة. كما يمكن للأطباء إدارة مواعيدهم بسهولة، ويحصل كل عميل جديد على فترة تجريبية مجانية لمدة 60 يوم بعد الموافقة على تسجيل المنشأة.",
            },

            blog: {
                title: "مدونة تابيبك",
                subtitle: "اكتشف أهم المقالات والنصائح حول إدارة المنشآت الطبية والعيادات",

                post1Title: "إدارة المواعيد الطبية بسهولة",
                post1Desc: "طرق فعالة لتنظيم المواعيد في العيادات والمستشفيات.",

                post2Title: "تحسين تجربة المرضى",
                post2Desc: "أفضل الممارسات لجعل تجربة المرضى أكثر سهولة وراحة.",

                post3Title: "أمان البيانات الطبية",
                post3Desc: "طرق حماية بيانات المرضى والمنشآت الطبية."
            },


            faq: {
                title: "الأسئلة الشائعة",
                subtitle: "نحن هنا لنجيب على أهم الأسئلة حول منصتنا الطبية وخدماتنا"
            },

            sidebar: {
                dashboard: "لوحة التحكم",
                short: "لوحة",
                home: "الرئيسية",
                profile: "الملف الشخصي",
                facilities: "مرافق",
                doctors: "الأطباء",
            },

            dashboard: {
                home: {
                    title: "لوحة التحكم",
                    welcome: "مرحبًا بك في لوحة التحكم الخاصة بك!"
                },
                profile: {
                    title: "إعدادات الملف الشخصي",
                    name: "الاسم",
                    email: "البريد الإلكتروني",
                    phone: "رقم الهاتف",
                    country: "الدولة",
                    city: "المدينة",
                    providerType: "نوع المزود",
                    birthDate: "تاريخ الميلاد",
                    gender: "النوع",
                    bio: "نبذة عنك",
                    updating: "جارٍ التحديث...",
                    updateButton: "تحديث الملف الشخصي",
                    updateSuccess: "تم تحديث الملف الشخصي بنجاح!",
                    updateFail: "فشل في تحديث الملف الشخصي.",
                    changePassword: "تغيير كلمة المرور",
                    currentPassword: "كلمة المرور الحالية",
                    newPassword: "كلمة المرور الجديدة",
                    confirmNewPassword: "تأكيد كلمة المرور الجديدة",
                    changing: "جارٍ التغيير...",
                    changeButton: "تغيير كلمة المرور",
                    passwordSuccess: "تم تغيير كلمة المرور بنجاح!",
                    passwordFail: "فشل في تغيير كلمة المرور.",
                    passwordMismatch: "كلمات المرور غير متطابقة!",
                    loading: "جارٍ تحميل الملف الشخصي..."
                },
                "stepBasic": {
                    "nameAr": "اسم المزود (عربي)",
                    "nameEn": "اسم المزود (انجليزي)",
                    "commercialName": "الاسم التجاري",
                    "email": "البريد الإلكتروني",
                    "phone": "رقم الهاتف",
                    "city": "المدينة",
                    "country": "الدولة",
                    "description": "الوصف",
                    "logo": "شعار المنشأة",
                    "cover": "صورة الغلاف",
                    "saveStep": "حفظ الخطوة",
                    "saved": "تم حفظ الخطوة بنجاح!",
                    "fillRequired": "الرجاء تعبئة الحقول المطلوبة"
                },
                "stepLicense": {
                    "licenseNumber": "رقم الترخيص",
                    "commercialRegister": "السجل التجاري",
                    "taxNumber": "الرقم الضريبي",
                    "active": "نشط",
                    "inactive": "غير نشط",
                    "saveStep": "حفظ الخطوة",
                    "saved": "تم حفظ الخطوة بنجاح!",
                    "fillRequired": "الرجاء تعبئة الحقول المطلوبة"
                },
                "steps": {
                    "basic": "المعلومات الأساسية",
                    "license": "بيانات الترخيص",
                    "documents": "المستندات",
                    "review": "المراجعة",
                    "Next": "التالي",
                    "Back": "السابق",
                },
                "stepReview": {
                    "title": "مراجعة بيانات المنشأة",
                    "name": "الاسم",
                    "email": "البريد الإلكتروني",
                    "phone": "رقم الهاتف",
                    "licenseNumber": "رقم الترخيص",
                    "subscriptionExpiry": "تاريخ انتهاء الاشتراك",
                    "documents": "المستندات",
                    "saveStep": "حفظ الخطوة",
                    "saved": "تم حفظ البيانات بنجاح!",
                    "fillRequired": "الرجاء تعبئة البيانات المطلوبة"
                },
                notifications: {
                    success: "نجاح",
                    error: "خطأ"
                },
            },
            registration: {
                title: "كيفية تسجيل منشأتك الطبية",
                subtitle:
                    "اتبع هذه الخطوات البسيطة لتسجيل عيادتك أو مركزك الطبي والبدء في إدارة المواعيد بسهولة.",

                startNow: "ابدأ التسجيل",

                steps: {
                    step1Title: "إضافة بيانات المنشأة",
                    step1Desc:
                        "قم بإدخال البيانات الأساسية للمنشأة مثل اسم العيادة أو المركز الطبي والبريد الإلكتروني ورقم الهاتف.",

                    step2Title: "رفع المستندات المطلوبة",
                    step2Desc:
                        "قم برفع المستندات الرسمية المطلوبة للتحقق من المنشأة وسيتم مراجعتها من قبل فريق الدعم.",

                    step3Title: "اختيار الباقة المناسبة",
                    step3Desc:
                        "اختر الباقة أو الاشتراك المناسب لاحتياجات منشأتك الطبية.",

                    step4Title: "مراجعة المستندات",
                    step4Desc:
                        "يقوم فريقنا بمراجعة المستندات وإرسال إشعار في حالة وجود أي ملاحظات أو مستندات غير صحيحة.",

                    step5Title: "الدخول إلى لوحة التحكم",
                    step5Desc:
                        "بعد الموافقة على التسجيل يمكنك الدخول إلى لوحة التحكم وإدارة الأطباء والمواعيد بسهولة.",
                },
            },
            "stepDocuments": {
                "commercial_register": "السجل التجاري",
                "national_id": "البطاقة الوطنية",
                "medical_license": "الرخصة الطبية",
                "hospital_license": "رخصة المستشفى",
                "clinic_license": "رخصة العيادة",
                "insurance": "التأمين",
                "experience_certificate": "شهادة الخبرة",
                "medical_degree": "الشهادة الطبية",
                "upload": "رفع",
                "saveStep": "حفظ الخطوة",
                "uploaded": "تم رفع المستند بنجاح!",
                "failedUpload": "فشل رفع المستند",
                "fillRequired": "الرجاء رفع مستند واحد على الأقل"
            },

            "doctor": {
                "load": {
                    "failed": "تعذر تحميل الأطباء"
                },
                "delete": {
                    "confirm": "هل أنت متأكد من رغبتك في حذف هذا الطبيب؟",
                    "success": "تم حذف الطبيب بنجاح",
                    "failed": "تعذر حذف الطبيب"
                },
                "actions": "الإجراءات",
                "view": "عرض",
                "add": {
                    "submit": "إضافة طبيب",
                    "title": "إضافة طبيب",
                    "name": "الاسم الكامل",
                    "email": "البريد الإلكتروني",
                    "phone": "رقم الهاتف",
                    "specialty": "التخصص",
                    "medical_license": "رخصة مزاولة المهنة الطبية",
                    "national_id": "الهوية الوطنية",
                    "insurance": "وثيقة التأمين",
                    "documents": "المستندات",
                    "review": "مراجعة وإرسال",
                    "success": "تمت إضافة الطبيب بنجاح",
                    "failed": "فشلت إضافة الطبيب"
                },
                "steps": {
                    "basic": "المعلومات الأساسية",
                    "documents": "تحميل المستندات",
                    "review": "المراجعة والإرسال"
                },
            },

            facility: {
                name: "الإسم",
                phone: "الهاتف",
                email: "الإيميل",
                status: "الحاله",
            },
        }
    }

};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ar",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;