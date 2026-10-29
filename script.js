/* ================================================================
   CascadaQuest — Tailwind theme configuration
   This file is loaded immediately after the Tailwind CDN in index.html.
   ================================================================ */
tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          },
          colors: {
            brand: {
              navy: '#0F2C59',
              slate: '#1E293B',
              ocean: '#0284C7',
              cyan: '#00B4D8',
              emerald: '#10B981',
              dark: '#0B132B',
            }
          }
        }
      }
    }

// Initialize icons and mobile menu after the HTML has been parsed.
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) window.lucide.createIcons();

      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    });

    // Toast Notification helper
    function showToast(message) {
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toast-text');
      toastText.textContent = message;
      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 3500);
    }

    // =========================================================================
    // 1. COMPREHENSIVE EUROPEAN WATERFALL ROUTE DATABASE (100% EUROPE)
    // =========================================================================
    const routeData = {
      staubbach: {
        slug: 'staubbach',
        name: 'Staubbach Falls & Lembah Lauterbrunnen',
        shortName: 'Staubbach (Swiss)',
        country: 'Swiss',
        region: 'Bernese Oberland (Lauterbrunnen)',
        flag: '🇨🇭',
        difficulty: 'Mudah',
        difficultyBadge: 'Mudah • Bertangga & Beraspal',
        distance: '3.2 km',
        elevationGain: '+125 m',
        duration: '55 Menit',
        altitudeRange: '795 — 920 mdpl',
        bestSeason: 'Mei — Oktober',
        flowRate: 'Deras (Lelehan Gletser Jungfrau)',
        center: [46.5935, 7.9091],
        zoom: 15,
        coords: '46.5935° N, 7.9091° E',
        description: 'Rute ikonik menyusuri lembah 72 air terjun Lauterbrunnen menuju tirai air Staubbach setinggi 297 meter, dilengkapi terowongan batu buatan abad ke-19 (Staubbach Gallery) tepat di balik tirai semburan air.',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=46.5935,7.9091&travelmode=walking',
        waypoints: [
          { lat: 46.5982, lon: 7.9075, name: 'Stasiun & Parkir Lauterbrunnen', desc: 'Titik start utama, fasilitas loker, toilet & pusat informasi wisata Alpen.', type: 'start' },
          { lat: 46.5960, lon: 7.9080, name: 'Gereja Desa Lauterbrunnen', desc: 'Spot foto lanskap legendaris dengan menara lonceng berlatar tebing granit.', type: 'view' },
          { lat: 46.5940, lon: 7.9088, name: 'Kaki Air Terjun Staubbach', desc: 'Area istirahat berbangku kayu dengan pemandangan langsung ke puncak tebing.', type: 'shelter' },
          { lat: 46.5932, lon: 7.9095, name: 'Staubbach Gallery Tunnel', desc: 'Terowongan batu buatan menembus bagian belakang tirai semburan air terjun.', type: 'waterfall' },
          { lat: 46.5870, lon: 7.9140, name: 'Jalur Sambung Trümmelbach', desc: 'Percabangan menuju ngarai air terjun gletser bawah tanah.', type: 'checkpoint' }
        ],
        trackpoints: [
          [46.5982, 7.9075, 795],
          [46.5971, 7.9078, 800],
          [46.5960, 7.9080, 805],
          [46.5948, 7.9084, 815],
          [46.5940, 7.9088, 830],
          [46.5936, 7.9092, 860],
          [46.5932, 7.9095, 920],
          [46.5925, 7.9105, 870],
          [46.5910, 7.9120, 840],
          [46.5890, 7.9132, 820],
          [46.5870, 7.9140, 810]
        ],
        elevationProfile: [
          { km: 0.0, ele: 795, label: 'Start (Bahnhof)' },
          { km: 0.8, ele: 805, label: 'Gereja Desa' },
          { km: 1.4, ele: 830, label: 'Kaki Staubbach' },
          { km: 1.9, ele: 920, label: 'Gallery Tunnel' },
          { km: 2.6, ele: 840, label: 'Lembah Lütschine' },
          { km: 3.2, ele: 810, label: 'Trümmelbach' }
        ]
      },
      gullfoss: {
        slug: 'gullfoss',
        name: 'Gullfoss (The Golden Falls) Canyon Trail',
        shortName: 'Gullfoss (Islandia)',
        country: 'Islandia',
        region: 'South Iceland (Golden Circle)',
        flag: '🇮🇸',
        difficulty: 'Mudah',
        difficultyBadge: 'Mudah • Boardwalk & Dek Kayu',
        distance: '1.8 km',
        elevationGain: '+45 m',
        duration: '35 Menit',
        altitudeRange: '215 — 255 mdpl',
        bestSeason: 'Sepanjang Tahun (Mikro-spikes saat salju)',
        flowRate: 'Sangat Deras (140 m³/detik)',
        center: [64.3271, -20.1199],
        zoom: 15,
        coords: '64.3271° N, 20.1199° W',
        description: 'Menyusuri bibir ngarai purba Sungai Hvítá di mana limpahan air gletser Langjökull terjun 32 meter ke dalam rekahan tektonik bertingkat dua.',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=64.3271,-20.1199&travelmode=walking',
        waypoints: [
          { lat: 64.3255, lon: -20.1250, name: 'Gullfoss Center & Parkir Atas', desc: 'Pusat pengunjung, kafe, persewaan perlengkapan tahan angin.', type: 'start' },
          { lat: 64.3262, lon: -20.1220, name: 'Dek Observasi Atas', desc: 'Panorama spektakuler kedua undakan air terjun dari ketinggian tebing.', type: 'view' },
          { lat: 64.3271, lon: -20.1199, name: 'Teras Batuan Air Terjun Utama', desc: 'Bibir jurang tepat di samping deburan air deras (wajib jas hujan!).', type: 'waterfall' },
          { lat: 64.3280, lon: -20.1170, name: 'Monumen Sigríður Tómasdóttir', desc: 'Plakat penghormatan pahlawan konservasi alam pertama Islandia.', type: 'shelter' }
        ],
        trackpoints: [
          [64.3255, -20.1250, 255],
          [64.3258, -20.1235, 250],
          [64.3262, -20.1220, 245],
          [64.3268, -20.1208, 230],
          [64.3271, -20.1199, 218],
          [64.3276, -20.1185, 222],
          [64.3280, -20.1170, 228]
        ],
        elevationProfile: [
          { km: 0.0, ele: 255, label: 'Visitor Center' },
          { km: 0.5, ele: 245, label: 'Upper Deck' },
          { km: 1.0, ele: 218, label: 'Lower Cascade Brim' },
          { km: 1.4, ele: 228, label: 'Sigríður Monumen' },
          { km: 1.8, ele: 255, label: 'Upper Loop' }
        ]
      },
      plitvice: {
        slug: 'plitvice',
        name: 'Plitvice Lakes (Veliki Slap & Lower Lakes)',
        shortName: 'Plitvice (Kroasia)',
        country: 'Kroasia',
        region: 'Lika-Senj (Taman Nasional Plitvice)',
        flag: '🇭🇷',
        difficulty: 'Sedang',
        difficultyBadge: 'Sedang • Boardwalk Kayu & Tangga Karst',
        distance: '4.8 km',
        elevationGain: '+95 m',
        duration: '2 Jam 15 Menit',
        altitudeRange: '505 — 585 mdpl',
        bestSeason: 'April — November',
        flowRate: 'Stabil & Menawan (Danau Bertingkat)',
        center: [44.9022, 15.6095],
        zoom: 15,
        coords: '44.9022° N, 15.6095° E',
        description: 'Rute legendaris "Program B" melewati jurang ngarai kapur purba, melintasi jembatan kayu di atas air danau toska transparan menuju Veliki Slap (78 meter).',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=44.9022,15.6095&travelmode=walking',
        waypoints: [
          { lat: 44.9050, lon: 15.6110, name: 'Entrance 1 (Ulaz 1) & Parkir', desc: 'Pintu gerbang utama utara, toilet, loket tiket resmi & stasiun bus shuttle.', type: 'start' },
          { lat: 44.9038, lon: 15.6098, name: 'Spot Pandang Ngarai Bawah', desc: 'Sudut klasik melihat danau Kaluđerovac dan Veliki Slap dari atas tebing.', type: 'view' },
          { lat: 44.9022, lon: 15.6095, name: 'Veliki Slap (The Great Fall)', desc: 'Air terjun tertinggi di Kroasia dengan semburan air karst memukau.', type: 'waterfall' },
          { lat: 44.8985, lon: 15.6070, name: 'Boardwalk Danau Gavanovac', desc: 'Jalan setapak kayu tepat di atas permukaan air danau toska jernih.', type: 'shelter' },
          { lat: 44.8910, lon: 15.6025, name: 'Dermaga Kapal Listrik P3', desc: 'Terminal kapal ramah lingkungan menyeberangi Danau Kozjak.', type: 'checkpoint' }
        ],
        trackpoints: [
          [44.9050, 15.6110, 580],
          [44.9042, 15.6102, 560],
          [44.9032, 15.6096, 525],
          [44.9022, 15.6095, 510],
          [44.9005, 15.6085, 512],
          [44.8985, 15.6070, 515],
          [44.8960, 15.6055, 520],
          [44.8935, 15.6040, 535],
          [44.8910, 15.6025, 545]
        ],
        elevationProfile: [
          { km: 0.0, ele: 580, label: 'Entrance 1' },
          { km: 0.9, ele: 525, label: 'Canyon Descent' },
          { km: 1.6, ele: 510, label: 'Veliki Slap' },
          { km: 2.8, ele: 515, label: 'Lower Lakes' },
          { km: 4.0, ele: 535, label: 'Lake Milanovac' },
          { km: 4.8, ele: 545, label: 'Boat Pier P3' }
        ]
      },
      seljalandsfoss: {
        slug: 'seljalandsfoss',
        name: 'Seljalandsfoss & Gljúfrabúi Cave Trail',
        shortName: 'Seljalandsfoss (Islandia)',
        country: 'Islandia',
        region: 'Suðurland (Pesisir Selatan)',
        flag: '🇮🇸',
        difficulty: 'Sedang',
        difficultyBadge: 'Sedang • Bebatuan Licin & Berlumut',
        distance: '1.6 km',
        elevationGain: '+35 m',
        duration: '45 Menit',
        altitudeRange: '45 — 80 mdpl',
        bestSeason: 'Mei — September (Musim panas)',
        flowRate: 'Deras & Berkabut Tebal',
        center: [63.6156, -19.9886],
        zoom: 16,
        coords: '63.6156° N, 19.9886° W',
        description: 'Salah satu sensasi trekking terunik di dunia di mana Anda berjalan menembus celah ceruk batu tepat di belakang tirai air Seljalandsfoss setinggi 60 meter.',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=63.6156,-19.9886&travelmode=walking',
        waypoints: [
          { lat: 63.6165, lon: -19.9920, name: 'Parkir Utama Seljalandsfoss', desc: 'Area parkir berbayar, kedai kopi, toilet & peta topografi resmi.', type: 'start' },
          { lat: 63.6156, lon: -19.9886, name: 'Kolam Depan Seljalandsfoss', desc: 'Sudut pandang klasik foto pelangi di siang hari cerah.', type: 'view' },
          { lat: 63.6154, lon: -19.9880, name: 'Ceruk Gua Belakang Tirai Air', desc: 'Lintasan batu basah 360 derajat di balik gemuruh air terjun.', type: 'waterfall' },
          { lat: 63.6208, lon: -19.9865, name: 'Gljúfrabúi Hidden Canyon', desc: 'Air terjun tersembunyi di dalam celah ngarai batu sempit 500m ke utara.', type: 'shelter' }
        ],
        trackpoints: [
          [63.6165, -19.9920, 45],
          [63.6160, -19.9900, 48],
          [63.6156, -19.9886, 52],
          [63.6154, -19.9880, 60],
          [63.6152, -19.9875, 58],
          [63.6170, -19.9872, 50],
          [63.6190, -19.9868, 55],
          [63.6208, -19.9865, 78]
        ],
        elevationProfile: [
          { km: 0.0, ele: 45, label: 'Parkir Utama' },
          { km: 0.4, ele: 52, label: 'Basin Depan' },
          { km: 0.7, ele: 60, label: 'Di Balik Tirai Air' },
          { km: 1.1, ele: 50, label: 'Padang Rumput' },
          { km: 1.6, ele: 78, label: 'Gljúfrabúi Gorge' }
        ]
      },
      krimml: {
        slug: 'krimml',
        name: 'Krimml Waterfalls (Krimmler Wasserfälle)',
        shortName: 'Krimml (Austria)',
        country: 'Austria',
        region: 'Salzburg (Taman Nasional Hohe Tauern)',
        flag: '🇦🇹',
        difficulty: 'Menantang',
        difficultyBadge: 'Menantang • Jalur Tanjakan Alpen Terjal',
        distance: '4.2 km',
        elevationGain: '+390 m',
        duration: '2 Jam 30 Menit',
        altitudeRange: '1.070 — 1.460 mdpl',
        bestSeason: 'Mei — Oktober',
        flowRate: 'Sangat Dahsyat (Total 380 Meter)',
        center: [47.2106, 12.1697],
        zoom: 15,
        coords: '47.2106° N, 12.1697° E',
        description: 'Air terjun tertinggi di Austria dengan tiga tingkat limpahan air gletser spektakuler menembus hutan pinus Alpen di Taman Nasional Hohe Tauern.',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=47.2106,12.1697&travelmode=walking',
        waypoints: [
          { lat: 47.2155, lon: 12.1680, name: 'Wasserwelten Krimml (Parkir)', desc: 'Pusat sains air terjun, parkir bus, restoran & tiket taman nasional.', type: 'start' },
          { lat: 47.2130, lon: 12.1690, name: 'Kürsingerkanzel (Tingkat Bawah)', desc: 'Titik terapi pernapasan resmi dengan deburan ion negatif terkuat.', type: 'view' },
          { lat: 47.2080, lon: 12.1695, name: 'Regenkanzel (Tingkat Tengah)', desc: 'Dek pandang undakan tengah setinggi 100 meter di antara bebatuan granit.', type: 'shelter' },
          { lat: 47.2030, lon: 12.1705, name: 'Schettkanzel (Tingkat Atas)', desc: 'Puncak air terjun 1.460 mdpl dengan pemandangan lembah Krimmler Achental.', type: 'waterfall' }
        ],
        trackpoints: [
          [47.2155, 12.1680, 1070],
          [47.2130, 12.1690, 1130],
          [47.2100, 12.1692, 1210],
          [47.2080, 12.1695, 1285],
          [47.2050, 12.1700, 1370],
          [47.2030, 12.1705, 1460]
        ],
        elevationProfile: [
          { km: 0.0, ele: 1070, label: 'Start (Wasserwelten)' },
          { km: 1.0, ele: 1130, label: 'Lower Falls (140m)' },
          { km: 2.2, ele: 1285, label: 'Middle Tier (100m)' },
          { km: 3.4, ele: 1370, label: 'Alpine Switchbacks' },
          { km: 4.2, ele: 1460, label: 'Upper Falls Summit' }
        ]
      },
      voringsfossen: {
        slug: 'voringsfossen',
        name: 'Vøringsfossen Canyon & Step-Bridge Trail',
        shortName: 'Vøringsfossen (Norwegia)',
        country: 'Norwegia',
        region: 'Vestland (Hardangervidda / Eidfjord)',
        flag: '🇳🇴',
        difficulty: 'Menantang',
        difficultyBadge: 'Menantang • Ngarai Fjord & Jembatan Gantung',
        distance: '3.5 km',
        elevationGain: '+170 m',
        duration: '1 Jam 45 Menit',
        altitudeRange: '580 — 750 mdpl',
        bestSeason: 'Juni — September',
        flowRate: 'Dahsyat (Jatuh Bebas 182 Meter)',
        center: [60.4264, 7.2514],
        zoom: 15,
        coords: '60.4264° N, 7.2514° E',
        description: 'Menyusuri tebing vertikal dataran tinggi Hardangervidda melintasi 99 anak tangga jembatan arsitektur di atas jurang ngarai Måbødalen sedalam ratusan meter.',
        googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=60.4264,7.2514&travelmode=walking',
        waypoints: [
          { lat: 60.4280, lon: 7.2480, name: 'Fossli Hotel & Parkir Viewpoint', desc: 'Titik awal di puncak dataran tinggi dengan pusat cinderamata dan dek kaca.', type: 'start' },
          { lat: 60.4264, lon: 7.2514, name: 'Jembatan Tangga Spektakuler', desc: 'Jembatan baja melayang menyeberangi ngarai tepat di atas air terjun.', type: 'waterfall' },
          { lat: 60.4245, lon: 7.2550, name: 'Tebing Hardangervidda Rim', desc: 'Panorama ngarai hijau Måbødalen dan sungai berliku menuju fjord.', type: 'view' },
          { lat: 60.4210, lon: 7.2450, name: 'Jalur Lembah Kuno Måbødalen', desc: 'Jalur batu peninggalan bersejarah menuju dasar deburan air terjun.', type: 'shelter' }
        ],
        trackpoints: [
          [60.4280, 7.2480, 750],
          [60.4272, 7.2498, 735],
          [60.4264, 7.2514, 715],
          [60.4255, 7.2530, 680],
          [60.4245, 7.2550, 640],
          [60.4225, 7.2480, 610],
          [60.4210, 7.2450, 580]
        ],
        elevationProfile: [
          { km: 0.0, ele: 750, label: 'Fossli Hotel' },
          { km: 0.8, ele: 715, label: 'Step-Bridge View' },
          { km: 1.6, ele: 640, label: 'Hardanger Rim' },
          { km: 2.5, ele: 610, label: 'Valley Descent' },
          { km: 3.5, ele: 580, label: 'Canyon Bottom Gorge' }
        ]
      }
    };

    let currentRouteSlug = 'staubbach';

    // =========================================================================
    // 2. LEAFLET INTERACTIVE ROUTE MAP (MODAL)
    // =========================================================================
    let modalMap = null;
    let modalRouteLine = null;
    let modalMarkersLayer = null;
    let isTopoLayerModal = false;
    let modalBaseTile = null;

    function initOrUpdateModalMap(route) {
      const container = document.getElementById('modal-leaflet-map');
      if (!container) return;

      if (!modalMap) {
        modalMap = L.map('modal-leaflet-map', {
          zoomControl: true,
          scrollWheelZoom: true
        });

        // Esri World Topo Map (Reliable, high-res & no 403 file:// blocks)
        modalBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 19,
          attribution: '&copy; Esri, DeLorme, USGS, NPS'
        }).addTo(modalMap);

        modalMarkersLayer = L.layerGroup().addTo(modalMap);
      }

      // Clear previous layers
      if (modalRouteLine) {
        modalMap.removeLayer(modalRouteLine);
      }
      modalMarkersLayer.clearLayers();

      // Set center & zoom
      modalMap.setView(route.center, route.zoom);

      // Create glowing polyline
      const latlngs = route.trackpoints.map(pt => [pt[0], pt[1]]);
      
      // Outer glow line
      const glowLine = L.polyline(latlngs, {
        color: '#00B4D8',
        weight: 8,
        opacity: 0.35,
        lineCap: 'round',
        lineJoin: 'round'
      });
      modalMarkersLayer.addLayer(glowLine);

      // Inner crisp route line
      modalRouteLine = L.polyline(latlngs, {
        color: '#0284C7',
        weight: 4,
        opacity: 0.95,
        dashArray: '8, 8',
        lineCap: 'round',
        lineJoin: 'round'
      }).addTo(modalMap);

      // Add custom styled markers for waypoints
      route.waypoints.forEach(wp => {
        let bgClass = 'bg-emerald-500';
        let iconName = 'flag';
        if (wp.type === 'waterfall') { bgClass = 'bg-cyan-500'; iconName = 'droplet'; }
        else if (wp.type === 'view') { bgClass = 'bg-amber-500'; iconName = 'camera'; }
        else if (wp.type === 'shelter') { bgClass = 'bg-purple-500'; iconName = 'home'; }

        const markerHtml = `
          <div class="custom-marker-pin w-8 h-8 ${bgClass} text-white flex items-center justify-center rounded-full border-2 border-white shadow-lg relative">
            <span class="pulse-ring ${bgClass} opacity-60"></span>
            <span class="text-xs font-bold leading-none">${wp.name.charAt(0)}</span>
          </div>
        `;

        const icon = L.divIcon({
          html: markerHtml,
          className: 'custom-leaflet-icon',
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([wp.lat, wp.lon], { icon: icon });
        marker.bindPopup(`
          <div class="p-1">
            <span class="text-[10px] uppercase font-bold text-slate-400 block">${wp.type}</span>
            <h5 class="text-xs font-bold text-slate-900">${wp.name}</h5>
            <p class="text-[11px] text-slate-600 mt-1 leading-snug">${wp.desc}</p>
            <p class="text-[10px] text-brand-ocean font-mono mt-1 font-semibold">${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}</p>
          </div>
        `);
        modalMarkersLayer.addLayer(marker);
      });

      // Fit bounds
      fitRouteModalBounds();

      // Trigger size invalidation after modal render
      setTimeout(() => {
        if (modalMap) modalMap.invalidateSize();
      }, 250);
    }

    function fitRouteModalBounds() {
      if (modalMap && modalRouteLine) {
        modalMap.fitBounds(modalRouteLine.getBounds(), { padding: [35, 35] });
      }
    }

    function toggleModalMapLayer() {
      if (!modalMap || !modalBaseTile) return;
      isTopoLayerModal = !isTopoLayerModal;
      modalMap.removeLayer(modalBaseTile);
      const label = document.getElementById('modal-layer-label');

      if (isTopoLayerModal) {
        modalBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 19,
          attribution: '&copy; Esri Satellite'
        }).addTo(modalMap);
        label.textContent = 'Tampilan Topo';
        showToast('Beralih ke tampilan Citra Satelit Resolusi Tinggi.');
      } else {
        modalBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 19,
          attribution: '&copy; Esri Topo'
        }).addTo(modalMap);
        label.textContent = 'Tampilan Satelit';
        showToast('Beralih ke tampilan Peta Topografi & Kontur.');
      }
    }

    // =========================================================================
    // 3. EUROPE OVERVIEW INTERACTIVE MAP (SECTION 2.5)
    // =========================================================================
    let europeMap = null;
    let europeBaseTile = null;
    let isTopoEurope = false;
    let europeMarkers = {};

    function initEuropeOverviewMap() {
      const container = document.getElementById('europe-overview-map');
      if (!container || europeMap) return;

      europeMap = L.map('europe-overview-map', {
        center: [52.5, 10.0],
        zoom: 4,
        zoomControl: true,
        scrollWheelZoom: false
      });

      // Esri World Topo Map for Europe overview (No 403 restrictions)
      europeBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        maxZoom: 18,
        attribution: '&copy; Esri, DeLorme, USGS, NPS'
      }).addTo(europeMap);

      // Add pins for all 6 European waterfalls
      Object.keys(routeData).forEach(key => {
        const item = routeData[key];
        const markerHtml = `
          <div class="custom-marker-pin w-10 h-10 bg-brand-cyan text-brand-dark font-black flex items-center justify-center rounded-2xl border-2 border-white shadow-xl relative cursor-pointer hover:bg-white hover:text-brand-navy transition-all">
            <span class="pulse-ring bg-brand-cyan"></span>
            <span class="text-sm">${item.flag}</span>
          </div>
        `;

        const icon = L.divIcon({
          html: markerHtml,
          className: 'custom-europe-marker',
          iconSize: [40, 40],
          iconAnchor: [20, 20]
        });

        const marker = L.marker(item.center, { icon: icon }).addTo(europeMap);
        
        marker.on('click', () => {
          selectEuropeWaterfallOnMap(key);
        });

        marker.bindTooltip(`<b>${item.name}</b><br><span style="color:#0284C7;font-size:11px;">Klik untuk rute & unduh GPX</span>`, {
          direction: 'top',
          offset: [0, -15]
        });

        europeMarkers[key] = marker;
      });
    }

    function selectEuropeWaterfallOnMap(key) {
      const item = routeData[key] || routeData.staubbach;
      currentRouteSlug = key;

      // Smooth fly to location
      if (europeMap) {
        europeMap.flyTo(item.center, 12, { duration: 1.5 });
      }

      // Update Floating Card on Map
      document.getElementById('map-card-badge').textContent = `${item.flag} ${item.country} • ${item.region}`;
      document.getElementById('map-card-title').textContent = item.name;
      document.getElementById('map-card-elev').textContent = item.elevationGain;
      document.getElementById('map-card-desc').textContent = item.description;
      document.getElementById('map-card-dist').innerHTML = `<i data-lucide="footprints" class="w-3.5 h-3.5 inline text-brand-cyan mr-1"></i> Jarak: ${item.distance}`;
      document.getElementById('map-card-time').innerHTML = `<i data-lucide="clock" class="w-3.5 h-3.5 inline text-amber-400 mr-1"></i> Waktu: ${item.duration}`;
      
      document.getElementById('map-card-btn-view').setAttribute('onclick', `openRouteModal('${key}')`);
      document.getElementById('map-card-btn-gpx').setAttribute('onclick', `downloadGPX('${key}')`);

      lucide.createIcons();
    }

    function flyToEuropeRegion(region) {
      document.querySelectorAll('.map-filter-btn').forEach(b => {
        b.classList.remove('bg-brand-cyan', 'text-brand-dark');
        b.classList.add('bg-slate-800', 'text-slate-200');
      });
      event.target.classList.add('bg-brand-cyan', 'text-brand-dark');
      event.target.classList.remove('bg-slate-800', 'text-slate-200');

      if (!europeMap) return;

      if (region === 'all') {
        europeMap.flyTo([52.5, 10.0], 4, { duration: 1.2 });
      } else if (region === 'swiss') {
        selectEuropeWaterfallOnMap('staubbach');
      } else if (region === 'iceland') {
        selectEuropeWaterfallOnMap('gullfoss');
      } else if (region === 'croatia') {
        selectEuropeWaterfallOnMap('plitvice');
      } else if (region === 'austria') {
        selectEuropeWaterfallOnMap('krimml');
      } else if (region === 'norway') {
        selectEuropeWaterfallOnMap('voringsfossen');
      }
    }

    function toggleMapLayer() {
      if (!europeMap || !europeBaseTile) return;
      isTopoEurope = !isTopoEurope;
      europeMap.removeLayer(europeBaseTile);
      const label = document.getElementById('map-layer-label');

      if (isTopoEurope) {
        europeBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18,
          attribution: '&copy; Esri Satellite'
        }).addTo(europeMap);
        label.textContent = 'Peta Topo';
        showToast('Peta beralih ke layer Satelit Resolusi Tinggi.');
      } else {
        europeBaseTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
          maxZoom: 18,
          attribution: '&copy; Esri Topo'
        }).addTo(europeMap);
        label.textContent = 'Peta Satelit';
        showToast('Peta beralih ke layer Topografi Kontur.');
      }
    }

    function resetEuropeMap() {
      if (europeMap) {
        europeMap.flyTo([52.5, 10.0], 4, { duration: 1.2 });
        showToast('Tampilan peta diatur ulang ke benua Eropa.');
      }
    }

    // =========================================================================
    // 4. ROUTE MODAL LOGIC & TAB SWITCHING
    // =========================================================================
    function openRouteModal(slugOrName) {
      // Find matching slug
      let matchedKey = 'staubbach';
      if (slugOrName) {
        const query = slugOrName.toLowerCase();
        for (const k in routeData) {
          if (k === query || routeData[k].name.toLowerCase().includes(query) || routeData[k].country.toLowerCase().includes(query)) {
            matchedKey = k;
            break;
          }
        }
      }

      currentRouteSlug = matchedKey;
      const route = routeData[currentRouteSlug];

      // Update text in modal
      document.getElementById('modal-title').textContent = route.name;
      document.getElementById('modal-location').textContent = `${route.region} • ${route.coords}`;
      document.getElementById('modal-badge-diff').textContent = route.difficultyBadge;
      document.getElementById('modal-badge-region').textContent = `${route.flag} ${route.country}`;
      document.getElementById('stat-distance').textContent = route.distance;
      document.getElementById('stat-elevation').textContent = route.elevationGain;
      document.getElementById('stat-duration').textContent = route.duration;
      document.getElementById('stat-flow').textContent = route.flowRate;
      document.getElementById('modal-description').textContent = route.description;
      document.getElementById('elev-range-label').textContent = route.altitudeRange;
      document.getElementById('btn-open-google-maps').href = route.googleMapsUrl;

      // Update active pill styling
      document.querySelectorAll('.route-pill').forEach(pill => {
        pill.classList.remove('bg-brand-navy', 'text-white', 'shadow-sm');
        pill.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
      });
      const activePill = document.getElementById(`pill-${currentRouteSlug}`);
      if (activePill) {
        activePill.classList.add('bg-brand-navy', 'text-white', 'shadow-sm');
        activePill.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
      }

      // Render Elevation SVG Profile & Waypoint list
      renderElevationProfile(route);
      renderWaypointsList(route);

      // Open Modal
      const modal = document.getElementById('route-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');

      // Default to Map tab
      switchRouteTab('map');

      // Initialize / Update Leaflet Map
      initOrUpdateModalMap(route);

      lucide.createIcons();
    }

    // Backward-compatibility for existing openModal(title, location)
    function openModal(title, location) {
      openRouteModal(title);
    }

    function closeModal() {
      const modal = document.getElementById('route-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function switchRouteTab(tabKey) {
      // Hide all tab contents
      document.getElementById('tab-content-map').classList.add('hidden');
      document.getElementById('tab-content-elevation').classList.add('hidden');
      document.getElementById('tab-content-download').classList.add('hidden');

      // Reset button styles
      document.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.classList.remove('text-brand-ocean', 'border-brand-ocean');
        btn.classList.add('text-slate-500', 'border-transparent');
      });

      // Show selected tab content
      document.getElementById(`tab-content-${tabKey}`).classList.remove('hidden');
      const activeBtn = document.getElementById(`tab-btn-${tabKey}`);
      if (activeBtn) {
        activeBtn.classList.add('text-brand-ocean', 'border-brand-ocean');
        activeBtn.classList.remove('text-slate-500', 'border-transparent');
      }

      // If switching to map, invalidate size
      if (tabKey === 'map' && modalMap) {
        setTimeout(() => {
          modalMap.invalidateSize();
          fitRouteModalBounds();
        }, 150);
      }

      lucide.createIcons();
    }

    // =========================================================================
    // 5. SVG ELEVATION GRAPH & WAYPOINT TIMELINE
    // =========================================================================
    function renderElevationProfile(route) {
      const svg = document.getElementById('elevation-svg');
      if (!svg) return;

      const profile = route.elevationProfile;
      const minEle = Math.min(...profile.map(p => p.ele)) - 20;
      const maxEle = Math.max(...profile.map(p => p.ele)) + 20;
      const maxKm = profile[profile.length - 1].km || 1;

      const width = 500;
      const height = 150;
      const padding = 20;

      const points = profile.map(p => {
        const x = padding + (p.km / maxKm) * (width - padding * 2);
        const y = height - padding - ((p.ele - minEle) / (maxEle - minEle)) * (height - padding * 2);
        return { x, y, ...p };
      });

      let pathD = `M ${points[0].x} ${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        pathD += ` L ${points[i].x} ${points[i].y}`;
      }

      const areaD = `${pathD} L ${points[points.length - 1].x} ${height - padding} L ${points[0].x} ${height - padding} Z`;

      let markersSvg = '';
      points.forEach(p => {
        markersSvg += `
          <circle cx="${p.x}" cy="${p.y}" r="4.5" fill="#0284C7" stroke="#ffffff" stroke-width="2"/>
          <text x="${p.x}" y="${p.y - 10}" font-size="10" font-weight="700" fill="#1E293B" text-anchor="middle">${p.ele}m</text>
        `;
      });

      svg.innerHTML = `
        <defs>
          <linearGradient id="elevGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#00B4D8" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#0284C7" stop-opacity="0.05"/>
          </linearGradient>
        </defs>
        <!-- Horizontal grid line -->
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#E2E8F0" stroke-width="1.5"/>
        <!-- Area fill -->
        <path d="${areaD}" fill="url(#elevGrad)"/>
        <!-- Elevation line -->
        <path d="${pathD}" fill="none" stroke="#0284C7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <!-- Checkpoint circles & text -->
        ${markersSvg}
      `;
    }

    function renderWaypointsList(route) {
      const container = document.getElementById('waypoints-container');
      if (!container) return;

      container.innerHTML = '';
      route.waypoints.forEach((wp, idx) => {
        let badgeColor = 'bg-slate-200 text-slate-800';
        let iconType = 'map-pin';
        if (wp.type === 'start') { badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300'; iconType = 'flag'; }
        else if (wp.type === 'waterfall') { badgeColor = 'bg-cyan-100 text-cyan-800 border-cyan-300'; iconType = 'droplet'; }
        else if (wp.type === 'view') { badgeColor = 'bg-amber-100 text-amber-800 border-amber-300'; iconType = 'camera'; }
        else if (wp.type === 'shelter') { badgeColor = 'bg-purple-100 text-purple-800 border-purple-300'; iconType = 'home'; }

        const card = document.createElement('div');
        card.className = 'p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 hover:bg-white transition-colors';
        card.innerHTML = `
          <div class="w-7 h-7 rounded-lg ${badgeColor} border flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
            ${idx + 1}
          </div>
          <div class="flex-1">
            <div class="flex items-center justify-between gap-2">
              <h5 class="text-xs sm:text-sm font-bold text-slate-900">${wp.name}</h5>
              <span class="text-[10px] font-mono font-semibold text-slate-400">${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}</span>
            </div>
            <p class="text-xs text-slate-500 mt-0.5 leading-relaxed">${wp.desc}</p>
          </div>
        `;
        container.appendChild(card);
      });
    }

    // =========================================================================
    // 6. REAL GPX FILE BUILDER & DOWNLOAD HANDLER
    // =========================================================================
    function downloadGPX(slug) {
      const route = routeData[slug] || routeData[currentRouteSlug] || routeData.staubbach;
      const time = new Date().toISOString();

      let wptsXml = '';
      route.waypoints.forEach(wp => {
        wptsXml += `  <wpt lat="${wp.lat}" lon="${wp.lon}">
    <name>${escapeXml(wp.name)}</name>
    <desc>${escapeXml(wp.desc || '')}</desc>
    <sym>${escapeXml(wp.type || 'Flag')}</sym>
  </wpt>
`;
      });

      let trkptsXml = '';
      route.trackpoints.forEach(pt => {
        trkptsXml += `      <trkpt lat="${pt[0]}" lon="${pt[1]}">
        <ele>${pt[2] || 0}</ele>
        <time>${time}</time>
      </trkpt>
`;
      });

      const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="CascadaQuest Europe - https://cascadaquest.org" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
  <metadata>
    <name>${escapeXml(route.name)}</name>
    <desc>${escapeXml(route.description)}</desc>
    <author>
      <name>CascadaQuest Europe Expeditions</name>
      <link href="https://cascadaquest.org"/>
    </author>
    <time>${time}</time>
  </metadata>
${wptsXml}  <trk>
    <name>${escapeXml(route.name)} [CascadaQuest Route]</name>
    <desc>Jalur hiking resmi terverifikasi CascadaQuest untuk ${escapeXml(route.name)}, ${escapeXml(route.country)}</desc>
    <trkseg>
${trkptsXml}    </trkseg>
  </trk>
</gpx>`;

      const blob = new Blob([gpxContent], { type: 'application/gpx+xml;charset=utf-8;' });
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `cascadaquest_${route.slug}_trail.gpx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      showToast(`File GPX "${route.shortName}" berhasil diunduh! Siap dibuka di Strava, Garmin, atau Komoot.`);
    }

    function downloadCurrentGPX() {
      downloadGPX(currentRouteSlug);
    }

    function escapeXml(unsafe) {
      return (unsafe || '').replace(/[<>&'"]/g, function (c) {
        switch (c) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '&': return '&amp;';
          case "'": return '&apos;';
          case '"': return '&quot;';
        }
      });
    }

    function copyGPSCoordinates() {
      const route = routeData[currentRouteSlug] || routeData.staubbach;
      navigator.clipboard.writeText(route.coords).then(() => {
        showToast(`Koordinat GPS [${route.coords}] berhasil disalin ke clipboard!`);
      }).catch(() => {
        showToast(`Koordinat: ${route.coords}`);
      });
    }

    function printRouteBrief() {
      const route = routeData[currentRouteSlug] || routeData.staubbach;
      showToast(`Membuka lembar panduan offline untuk ${route.shortName}...`);
      setTimeout(() => {
        window.print();
      }, 500);
    }

    // =========================================================================
    // 7. CINEMA VIDEO MODAL HANDLERS
    // =========================================================================
    const videoData = {
      swiss: {
        slug: 'staubbach',
        title: "Lauterbrunnen Valley & Alpine Glacier (Swiss)",
        location: "Swiss (Lauterbrunnen)",
        streamUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Abfluss_des_Breithorngletschers.webm",
        youtubeUrl: "https://www.youtube.com/watch?v=6RFYXdVVjUQ"
      },
      iceland: {
        slug: 'gullfoss',
        title: "Svartifoss & Gullfoss Glacial Cascades (Islandia)",
        location: "Islandia (South Coast)",
        streamUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/202_Svartifoss_long_exposure_timelapse_Video_by_Giles_Laurent.webm",
        youtubeUrl: "https://www.youtube.com/watch?v=olgs9WCABlg"
      },
      croatia: {
        slug: 'plitvice',
        title: "Plitvice & Krka Cascading Lakes (Kroasia)",
        location: "Kroasia (Plitvice / Krka)",
        streamUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wasserfall_Skradinski_buk_im_Nationalpark_Krka_%28Kroatien%29.webm",
        youtubeUrl: "https://www.youtube.com/watch?v=ih9MCA3qGZQ"
      }
    };

    let currentVideoRegion = 'swiss';

    function openVideoModal(regionKey, customTitle) {
      currentVideoRegion = regionKey || 'swiss';
      const item = videoData[currentVideoRegion] || videoData.swiss;
      
      document.getElementById('video-modal-title').textContent = customTitle || item.title;
      
      const player = document.getElementById('native-video-player');
      const source = document.getElementById('video-source');
      const ytLink = document.getElementById('youtube-direct-link');
      
      source.src = item.streamUrl;
      player.load();
      player.play().catch(() => {});
      
      ytLink.href = item.youtubeUrl;
      
      // Update active chapter button styling
      document.querySelectorAll('.chapter-btn').forEach(btn => {
        btn.classList.remove('bg-brand-cyan/20', 'text-brand-cyan', 'border-brand-cyan/40');
        btn.classList.add('bg-slate-800', 'text-slate-200', 'border-slate-700');
      });
      const activeBtn = document.getElementById(`btn-chapter-${currentVideoRegion}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-brand-cyan/20', 'text-brand-cyan', 'border-brand-cyan/40');
        activeBtn.classList.remove('bg-slate-800', 'text-slate-200', 'border-slate-700');
      }

      const modal = document.getElementById('video-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');

      lucide.createIcons();
    }

    function closeVideoModal() {
      const modal = document.getElementById('video-modal');
      const player = document.getElementById('native-video-player');
      if (player) {
        player.pause();
      }
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    function switchVideo(regionKey) {
      openVideoModal(regionKey);
    }

    function openRouteFromVideo() {
      closeVideoModal();
      const item = videoData[currentVideoRegion] || videoData.swiss;
      openRouteModal(item.slug || 'staubbach');
    }

    // Close modals on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeVideoModal();
        closeModal();
      }
    });

    // Toggle Favorite Button
    function toggleFavorite(btn) {
      if (btn.classList.contains('text-rose-500')) {
        btn.classList.remove('text-rose-500');
        btn.classList.add('text-slate-700');
        showToast('Dihapus dari daftar favorit.');
      } else {
        btn.classList.add('text-rose-500');
        btn.classList.remove('text-slate-700');
        showToast('Berhasil disimpan ke daftar favorit Anda!');
      }
    }

    // Handle Quick Search
    function handleSearch() {
      const country = document.getElementById('search-country').value;
      const difficulty = document.getElementById('search-difficulty').value;
      const interest = document.getElementById('search-interest').value;
      
      showToast(`Mencari air terjun: [${country}] • Jalur [${difficulty}] • Minat [${interest}]...`);
      
      // Auto open matching route or scroll
      if (country === 'Islandia') {
        openRouteModal('gullfoss');
      } else if (country === 'Swiss') {
        openRouteModal('staubbach');
      } else if (country === 'Kroasia') {
        openRouteModal('plitvice');
      } else if (country === 'Norwegia') {
        openRouteModal('voringsfossen');
      } else if (country === 'Austria') {
        openRouteModal('krimml');
      } else {
        document.getElementById('europe-map').scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Handle Newsletter Lead Magnet
    function handleNewsletter(e) {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      showToast(`Terima kasih! Buku Saku Air Terjun Eropa telah dikirimkan ke: ${email}`);
      document.getElementById('newsletter-email').value = '';
    }

    // Initialize Europe Overview Map once DOM is loaded
    window.addEventListener('DOMContentLoaded', () => {
      initEuropeOverviewMap();
    });
    // Fallback if window already loaded
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(initEuropeOverviewMap, 200);
    }
