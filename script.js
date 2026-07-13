const video = document.getElementById('scroll-video');
const hint = document.getElementById('scroll-hint');
const who = document.getElementById('overlay-who');
const what = document.getElementById('overlay-what');
const where = document.getElementById('overlay-where');

video.load();

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // --- PERFECTLY BALANCED PIXEL DRIVER ---
    // Expanded from 3200 to 3800 to eliminate the empty scroll dead zone
    const playbackScrollDistance = 3800; 
    
    let videoProgress = Math.min(1, scrollTop / playbackScrollDistance);

    if (video.duration) {
        const targetTime = videoProgress * video.duration;
        if (Math.abs(video.currentTime - targetTime) > 0.01) {
            video.currentTime = targetTime;
        }
    }

    // --- ADJUSTED TEXT TIMELINE MAPPINGS ---
    // Shifted numbers slightly to align with the expanded playback distance
    
    if (scrollTop > 50) {
        hint.style.opacity = "0";
    } else {
        hint.style.opacity = "1";
    }

    // 1. Who I Am (Visible from scroll pixel 450 to 1250)
    if (scrollTop >= 450 && scrollTop < 1250) {
        who.style.opacity = "1";
        who.style.visibility = "visible";
    } else {
        who.style.opacity = "0";
        who.style.visibility = "hidden";
    }

    // 2. What I Do (Visible from scroll pixel 1500 to 2300)
    if (scrollTop >= 1500 && scrollTop < 2300) {
        what.style.opacity = "1";
        what.style.visibility = "visible";
    } else {
        what.style.opacity = "0";
        what.style.visibility = "hidden";
    }

    // 3. Where I Experiment (Visible from scroll pixel 2550 to 3250)
    if (scrollTop >= 2550 && scrollTop < 3250) {
        where.style.opacity = "1";
        where.style.visibility = "visible";
    } else {
        where.style.opacity = "0";
        where.style.visibility = "hidden";
    }
});