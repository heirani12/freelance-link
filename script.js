$(document).ready(function() {
    const links = [
        { name: "FlexJobs", url: "https://flexjobs.com", description: "کشف بیش از 50 دسته شغلی با بیش از 100,000 آگهی شغلی." },
        { name: "We Work Remotely", url: "https://weworkremotely.com", description: "یافتن افراد واجد شرایط در غیرمنتظره‌ترین مکان‌ها." },
        { name: "Arc", url: "https://arc.dev", description: "پلتفرمی برای استخدام و مدیریت توسعه‌دهندگان دورکار." },
        { name: "Jobspresso", url: "https://jobspresso.co", description: "آگهی‌های انتخاب شده در حوزه‌های فناوری، بازاریابی و پشتیبانی مشتری." },
        { name: "Remote.co", url: "https://remote.co", description: "نکات کاری دورکار، منابع شغلی و فرصت‌ها." },
        { name: "JustRemote", url: "https://justremote.co", description: "آگهی‌های دورکار انتخاب شده که مستقیماً به صندوق پستی شما ارسال می‌شود." },
        { name: "Virtual Vocations", url: "https://virtualvocations.com", description: "آگهی‌های دورکاری که به دقت بررسی و تأیید شده‌اند." },
        { name: "Remotive", url: "https://remotive.io", description: "آگهی‌های دورکار در طراحی، برنامه‌نویسی، بازاریابی و بیشتر." },
        { name: "Skip the Drive", url: "https://skipthedrive.com", description: "یافتن آگهی‌های دورکاری که نیاز به رفت و آمد ندارند." },
        { name: "Pangian", url: "https://pangian.com", description: "بهترین شغل‌های دورکار، کار از هر جایی و سفر به دور دنیا." },
        { name: "Working Nomads", url: "https://workingnomads.co", description: "فهرست انتخاب شده‌ای از آگهی‌های دورکار با جدیدترین فرصت‌ها." },
        { name: "PowerToFly", url: "https://powertofly.com", description: "اتصال زنان با شرکت‌هایی که به تنوع متعهد هستند." },
        { name: "Dribbble", url: "https://dribbble.com", description: "پلتفرم آنلاین برای نمایش و کشف کارهای خلاقانه." },
        { name: "Remote OK", url: "https://remoteok.io", description: "آگهی‌های دورکار در برنامه‌نویسی، طراحی و بیشتر." },
        { name: "Landing.Jobs", url: "https://landing.jobs", description: "آگهی‌های فناوری و استارتاپ‌ها در اروپا." },
        { name: "Career Vault", url: "https://careervault.io", description: "یافتن آگهی‌های دورکار و کنترل بر روی شغل خود." },
        { name: "Authentic Jobs", url: "https://authenticjobs.com", description: "آگهی‌های دورکار و طراحی." },


        { name: "Wellfound", url: "https://wellfound.co", description: "آگهی‌های انتخاب شده برای توسعه‌دهندگان." },
        { name: "Upwork", url: "https://upwork.com", description: "یافتن فریلنسرها و آگهی‌های فریلنسری." },
        { name: "Fiverr", url: "https://fiverr.com", description: "بازار خدمات دیجیتال." },
        { name: "Designhill", url: "https://designhill.com", description: "انجام کارهای طراحی شما." },
        { name: "Toptal Business", url: "https://toptal.com/business", description: "استخدام مشاوران و کارشناسان برتر کسب و کار." },
        { name: "Freelancer", url: "https://freelancer.com", description: "استخدام فریلنسرها و یافتن آگهی‌های فریلنسری آنلاین." },
        { name: "FreelancerMap", url: "https://freelancermap.com", description: "یافتن فریلنسرها و متخصصان IT برای پروژه‌های شما." },
        { name: "Gun", url: "https://gun.io", description: "شبکه برتر برای توسعه‌دهندگان نرم‌افزار برتر." },
        { name: "Behance", url: "https://behance.net", description: "پلتفرم آنلاین برای نمایش و کشف کارهای خلاقانه." }
    ];

    const linksList = $('#links-list');

    links.forEach(link => {
        linksList.append(
            <tr>
                <td><a href="${link.url}" target="_blank">${link.name}</a></td>
                <td>${link.url}</td>
                <td>${link.description}</td>
            </tr>
        );
    });
});
