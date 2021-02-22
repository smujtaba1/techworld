//Power Supplies
import aresgameagv750 from './images/aresgameagv750.png';
import corsairax1200i from './images/corsairax1200i.png';
import corsaircx550 from './images/corsaircx550.png';
import evga750n1 from './images/evga750n1.png';
import gigabytegpp850gm from './images/gigabytegpp850gm.png';
import thermaltakesmart500 from './images/thermaltakesmart500.png';
import thermaltaketoughpower850 from './images/thermaltaketoughpower850.png';
import corsairhx1200 from './images/corsairhx1200.png';
import evgasupernova1200 from './images/evgasupernova1200.png';
import corsairrmx750 from './images/corsairrmx750.png';
import thermaltakesmart600 from './images/thermaltakesmart600.png'

//Graphics Cards
import nvidiageforcertx3060 from './images/nvidiageforcertx3060.png';
import nvidiageforcertx2060 from './images/nvidiageforcertx2060.png';
import nvidiageforcertx3090 from './images/nvidiageforcertx3090.png';
import nvidiageforcegtx1050ti from './images/nvidiageforcegtx1050ti.png';

//Ram
import corsairvengeance from './images/corsairvengeance.png';
import atechfbact2kit from './images/atechfbact2kit.png';
import hyperxfury from './images/hyperxfury.png';
import hyperxfuryblack from './images/hyperxfuryblack.png';
import corsairdominator from './images/corsairdominator.png';

//Storage Drives
import samsungevo1000 from './images/samsungevo1000.png';
import seagatest3 from './images/seagatest3.png';



//Processors
import amdryzen3600 from './images/amdryzen3600.png';
import inteli510400 from './images/inteli510400.png';

//Mice
import jellycombms001 from './images/jellycombms001.png';
import logitechm525 from './images/logitechm525.png';
import jellycombms059 from './images/jellycombms059.png';

//Keyboards
import arteckhw192 from './images/arteckhw192.png';
import corsairk55 from './images/corsairk55.png';

//Wifi Adapters
import febsmartn600 from './images/febsmartn600.png';
import tplinkac600 from './images/tplinkac600.png';

let data = {
	powerSupplies: [
		{
			brand:"Corsair",
			model:"AX1200i",
			price:399.66,
			description:`Corsair AX1200i Digital ATX PSU: complete digital control. The revolutionary AX1200i is the
				first desktop PC power supply to use digital DSP control and Corsair Link to bring you an unprecedented
				level of monitoring and performance customization. The DSP in the AX1200i makes on-the-fly adjustments
				for incredibly tight voltage regulation, 80 PLUSamp;reg; Platinum Efficiency, and clean, stable power.
				Real-time monitoring and control with Corsair LinkPut the AX1200i under your control by connecting it
				directly to a USB header on your motherboard with the included cable, or to a Corsair Link Commander
				(available separately). Then, download the free Corsair Link Dashboard software for unrivaled power
				supply monitoring and control options.`,
			power:500,
			powerUnit:"watts",
			image:corsairax1200i
		},

		{
			brand:"Aresgame",
			model:"AGV750",
			price:79.99,
			description:`ARESGAME AGV750 power supply is the best partner for game enthusiasts because of its very 
				stable power output and excellent performance. Get One and Win All. You deserve it!`,
			power:750,
			powerUnit:"watts",
			image:aresgameagv750
		},

		{
			brand:"Corsair",
			model:"CX550",
			price:79.99,
			description:`CX Series Modular power supply units are an excellent choice for basic system builds and desktop
				PC computer upgrades, offering high reliability, low noise, and easy installation. The flexible modular cabling
				system lets you use only the cables you need, and 80 PLUS Bronze certified efficiency means less excess heat,
				lower noise, and lower power bills. The large-diameter, thermally controlled fan makes the CX Series Modular
				quieter at idle, and reduces noise even when you're pushing your system hard. The matte black finish, black-sleeved
				cables and black connectors help give your system a restrained, high-tech look. Continuous output rated temperature
				C: 40°C.`,
			power:550,
			powerUnit:"watts",
			image:corsaircx550
		},
		{
			brand:"Thermaltake",
			model:"Smart-500",
			price:47.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:500,
			powerUnit:"watts",
			image:thermaltakesmart500
		},
		{
			brand:"EVGA",
			model:"750N1",
			price:62.99,
			description:`When building on a budget, the EVGA 750W power supply is a great choice at a low cost. Supporting
			30a on a single +12V rail provides more options without having to reduce your component requirements. The EVGA
			750W offers the connections and protections needed for basic system builds. With a standard 2 year and Ultra
			quiet fan design the EVGA 750W power supply will be a great asset for your next build on a budget.`,
			power:750,
			powerUnit:"watts",
			image:evga750n1
		},
		{
			brand:"Gigabyte",
			model:"GP-P850GM",
			price:127.65,
			description:`80 PLUS Gold certified Fully modular design 120mm Smart Hydraulic Bearing (HYB) Fan Main Japanese
			capacitors Powerful single +12V rail OVP/OPP/SCP/UVP/OCP/OTP protection Compact size 5 years warranty (Adjusted
			according to different regions)`,
			power:850,
			powerUnit:"watts",
			image:gigabytegpp850gm
		},
		
		
		{
			brand:"Corsair",
			model:"HX1200",
			price:439.99,
			description:`The CORSAIR HX Series gives you extremely tight voltages and virtually silent operation. With all
			Japanese capacitors, they're ideal for high performance PCs where reliability is essential. 80+ Platinum efficiency
			reduces operating cost and excess heat, and together with the Zero RPM Fan Mode, gives you virtually silent
			operation. Tech support: 1-888-222-4346 opt. 1`,
			power:1200,
			powerUnit:"watts",
			image:corsairhx1200
		},
		{
			brand:"EVGA",
			model:"Supernova",
			price:524.99,
			description:`Introducing the EVGA Supernova 1200 P2 power supply. This power supply raises the bar with 1200W of
			continuous power delivery and 92% efficiency. A fully modular design reduces case clutter and 100% Japanese
			Capacitors ensures that only the absolute best components are used. What does that mean? The best stability,
			reliability, overclock ability and unparalleled control. The EVGA Supernova 1200 P2 is the ultimate tool to eliminate
			all system bottlenecks and achieve unrivaled performance.`,
			power:1200,
			powerUnit:"watts",
			image:evgasupernova1200
		},
		{
			brand:"Thermaltake",
			model:"Toughpower-850",
			price:127.65,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:850,
			powerUnit:"watts",
			image:thermaltaketoughpower850
		},
		{
			brand:"Corsair",
			model:"RMX750",
			price:144.95,
			description:`Corsair RM750x series power supplies are built with the highest quality components to deliver 80 PLUS
			Gold efficient power to your PC. Using only Japanese 105 Degree C capacitors, users can depend on an RM750x PSUs' long
			life and reliability, backed by a ten year warranty. Zero RPM Mode means an RM750x series PSU is virtually silent at
			low and medium loads, and even at maximum power, a low noise fan ensures quiet operation. Fully modular cables make PC
			builds and upgrades easy, as you only need to install the cables your system requires. Quiet, efficient and dependable,
			an RM750x PSU has everything you need to power your high performance PC for years to come. PC for years to come.
			Continuous output rated temperature: 50°C.`,
			power:750,
			powerUnit:"watts",
			image:corsairrmx750
		},
		{
			brand:"Thermaltake",
			model:"Smart-600",
			price:54.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:600,
			powerUnit:"watts",
			image:thermaltakesmart600
		},
		//Repeated items Below
		{
			brand:"EVGA",
			model:"Supernova",
			price:524.99,
			description:`Introducing the EVGA Supernova 1200 P2 power supply. This power supply raises the bar with 1200W of
			continuous power delivery and 92% efficiency. A fully modular design reduces case clutter and 100% Japanese
			Capacitors ensures that only the absolute best components are used. What does that mean? The best stability,
			reliability, overclock ability and unparalleled control. The EVGA Supernova 1200 P2 is the ultimate tool to eliminate
			all system bottlenecks and achieve unrivaled performance.`,
			power:1200,
			powerUnit:"watts",
			image:evgasupernova1200
		},
		{
			brand:"Thermaltake",
			model:"Toughpower-850",
			price:127.65,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:850,
			powerUnit:"watts",
			image:thermaltaketoughpower850
		},
		{
			brand:"Thermaltake",
			model:"Smart-500",
			price:47.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:500,
			powerUnit:"watts",
			image:thermaltakesmart500
		},
		{
			brand:"EVGA",
			model:"750N1",
			price:62.99,
			description:`When building on a budget, the EVGA 750W power supply is a great choice at a low cost. Supporting
			30a on a single +12V rail provides more options without having to reduce your component requirements. The EVGA
			750W offers the connections and protections needed for basic system builds. With a standard 2 year and Ultra
			quiet fan design the EVGA 750W power supply will be a great asset for your next build on a budget.`,
			power:750,
			powerUnit:"watts",
			image:evga750n1
		},
		{
			brand:"Gigabyte",
			model:"GP-P850GM",
			price:127.65,
			description:`80 PLUS Gold certified Fully modular design 120mm Smart Hydraulic Bearing (HYB) Fan Main Japanese
			capacitors Powerful single +12V rail OVP/OPP/SCP/UVP/OCP/OTP protection Compact size 5 years warranty (Adjusted
			according to different regions)`,
			power:850,
			powerUnit:"watts",
			image:gigabytegpp850gm
		},
		
		
		{
			brand:"Corsair",
			model:"HX1200",
			price:439.99,
			description:`The CORSAIR HX Series gives you extremely tight voltages and virtually silent operation. With all
			Japanese capacitors, they're ideal for high performance PCs where reliability is essential. 80+ Platinum efficiency
			reduces operating cost and excess heat, and together with the Zero RPM Fan Mode, gives you virtually silent
			operation. Tech support: 1-888-222-4346 opt. 1`,
			power:1200,
			powerUnit:"watts",
			image:corsairhx1200
		},
		{
			brand:"EVGA",
			model:"Supernova",
			price:524.99,
			description:`Introducing the EVGA Supernova 1200 P2 power supply. This power supply raises the bar with 1200W of
			continuous power delivery and 92% efficiency. A fully modular design reduces case clutter and 100% Japanese
			Capacitors ensures that only the absolute best components are used. What does that mean? The best stability,
			reliability, overclock ability and unparalleled control. The EVGA Supernova 1200 P2 is the ultimate tool to eliminate
			all system bottlenecks and achieve unrivaled performance.`,
			power:1200,
			powerUnit:"watts",
			image:evgasupernova1200
		},
		{
			brand:"Thermaltake",
			model:"Toughpower-850",
			price:127.65,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:850,
			powerUnit:"watts",
			image:thermaltaketoughpower850
		},
		{
			brand:"Corsair",
			model:"RMX750",
			price:144.95,
			description:`Corsair RM750x series power supplies are built with the highest quality components to deliver 80 PLUS
			Gold efficient power to your PC. Using only Japanese 105 Degree C capacitors, users can depend on an RM750x PSUs' long
			life and reliability, backed by a ten year warranty. Zero RPM Mode means an RM750x series PSU is virtually silent at
			low and medium loads, and even at maximum power, a low noise fan ensures quiet operation. Fully modular cables make PC
			builds and upgrades easy, as you only need to install the cables your system requires. Quiet, efficient and dependable,
			an RM750x PSU has everything you need to power your high performance PC for years to come. PC for years to come.
			Continuous output rated temperature: 50°C.`,
			power:750,
			powerUnit:"watts",
			image:corsairrmx750
		},
		{
			brand:"Thermaltake",
			model:"Smart-600",
			price:54.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:600,
			powerUnit:"watts",
			image:thermaltakesmart600
		},
		{
			brand:"Thermaltake",
			model:"Smart-500",
			price:47.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:500,
			powerUnit:"watts",
			image:thermaltakesmart500
		},
		{
			brand:"EVGA",
			model:"750N1",
			price:62.99,
			description:`When building on a budget, the EVGA 750W power supply is a great choice at a low cost. Supporting
			30a on a single +12V rail provides more options without having to reduce your component requirements. The EVGA
			750W offers the connections and protections needed for basic system builds. With a standard 2 year and Ultra
			quiet fan design the EVGA 750W power supply will be a great asset for your next build on a budget.`,
			power:750,
			powerUnit:"watts",
			image:evga750n1
		},
		{
			brand:"Gigabyte",
			model:"GP-P850GM",
			price:127.65,
			description:`80 PLUS Gold certified Fully modular design 120mm Smart Hydraulic Bearing (HYB) Fan Main Japanese
			capacitors Powerful single +12V rail OVP/OPP/SCP/UVP/OCP/OTP protection Compact size 5 years warranty (Adjusted
			according to different regions)`,
			power:850,
			powerUnit:"watts",
			image:gigabytegpp850gm
		},
		
		
		{
			brand:"Corsair",
			model:"HX1200",
			price:439.99,
			description:`The CORSAIR HX Series gives you extremely tight voltages and virtually silent operation. With all
			Japanese capacitors, they're ideal for high performance PCs where reliability is essential. 80+ Platinum efficiency
			reduces operating cost and excess heat, and together with the Zero RPM Fan Mode, gives you virtually silent
			operation. Tech support: 1-888-222-4346 opt. 1`,
			power:1200,
			powerUnit:"watts",
			image:corsairhx1200
		},
		{
			brand:"EVGA",
			model:"Supernova",
			price:524.99,
			description:`Introducing the EVGA Supernova 1200 P2 power supply. This power supply raises the bar with 1200W of
			continuous power delivery and 92% efficiency. A fully modular design reduces case clutter and 100% Japanese
			Capacitors ensures that only the absolute best components are used. What does that mean? The best stability,
			reliability, overclock ability and unparalleled control. The EVGA Supernova 1200 P2 is the ultimate tool to eliminate
			all system bottlenecks and achieve unrivaled performance.`,
			power:1200,
			powerUnit:"watts",
			image:evgasupernova1200
		},
		{
			brand:"Thermaltake",
			model:"Toughpower-850",
			price:127.65,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:850,
			powerUnit:"watts",
			image:thermaltaketoughpower850
		},
		{
			brand:"Corsair",
			model:"RMX750",
			price:144.95,
			description:`Corsair RM750x series power supplies are built with the highest quality components to deliver 80 PLUS
			Gold efficient power to your PC. Using only Japanese 105 Degree C capacitors, users can depend on an RM750x PSUs' long
			life and reliability, backed by a ten year warranty. Zero RPM Mode means an RM750x series PSU is virtually silent at
			low and medium loads, and even at maximum power, a low noise fan ensures quiet operation. Fully modular cables make PC
			builds and upgrades easy, as you only need to install the cables your system requires. Quiet, efficient and dependable,
			an RM750x PSU has everything you need to power your high performance PC for years to come. PC for years to come.
			Continuous output rated temperature: 50°C.`,
			power:750,
			powerUnit:"watts",
			image:corsairrmx750
		},
		{
			brand:"Thermaltake",
			model:"Smart-600",
			price:54.99,
			description:`Incorporating various high-quality components, The smart series - models are Rated from 500W to 700W
			- saves energy through its high efficiency of up to 86% and accommodates any mainstream build with the most
			demanding requirements. An embedded intelligent cooling fan delivers excellent Airflow at an exceptionally low
			noise level. Additionally, the single +12V rail design enables non-stop usage with stable and reliable performance.
			Smart Series adopt 120mm cooling fan delivers excellent Airflow at an exceptionally low noise level. Smart Series
			saves energy through its high energy efficiency of up to 86% and is 80 PLUS standard Certified. High quality
			components enable non-stop usage with stable and reliable performance, no more capacitor explosion and leakage.
			Single +12V output.`,
			power:600,
			powerUnit:"watts",
			image:thermaltakesmart600
		}

	],
	
	graphicsCards: [
		{
			brand:"Nvidia",
			model:"rtx3060",
			price:849.99,
			description:`The EVGA GeForce RTX 3060 delivers the unprecedented performance that gamers crave for 4K 
				resolution gaming, powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and
				Tensor Cores, streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
				Combined with the next generation of design, cooling, and overclocking with EVGA Precision XI, the
				EVGA GeForce RTX 3080 Series presents a modern definition in ultimate performance.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx3060
		},
		{
			brand:"Nvidia",
			model:"rtx2060",
			price:699.99,
			description:`The EVGA GeForce RTX 20-Series Graphics Cards are powered by the all-new NVIDIA Turing
			architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion.
			With the EVGA GeForce RTX 20-Series gaming cards you get the best gaming experience with next generation
			graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision
			X1 software. The new NVIDIA GeForce RTX GPUs have reinvented graphics and set a new bar for perfrmance.
			Powered by the new NVIDIA Turing GPU architecture and the revolutionary NVIDI RTX platform, the new graphics
			cards bring together real-time ray tracing, artificial intelligence, and programmable shading. This is not
			only a whole new way to experience games - this is the ultimate PC gaming experience.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx2060
		},
		{
			
			brand:"Nvidia",
			model:"rtx3090",
			price:2299.99,
			description:`VENTUS brings a performance-focused design that maintains the essentials to accomplish any task at
			hand. A capable triple fan arrangement laid into a rigid industrial design lets this sharp looking graphics card
			fit into any build. The GeForce RTX 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered
			by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced RT Cores, 
			Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver 
			the ultimate gaming experience.`,
			memory:24,
			memoryUnit:"GB",
			image:nvidiageforcertx3090
		},
		{	
			
			brand:"Nvidia",
			model:"gtx1050ti",
			price:199.80,
			description:`Gigabyte G1 Gaming Series graphics cards are crafted for perfection in pursuit of the ultimate
			graphics experience for gaming enthusiasts. Based on the revolutionary NVIDIA Pascal GPU architecture, G1
			gaming graphics card brings you incredible gaming experience. -Pascal-powered graphics card give you superior
			performance and power efficiency -Classic and modern games at 1080p @ 60 FPS -Fast, smooth, power-efficient
			gaming experiences`,
			memory:4,
			memoryUnit:"GB",
			image:nvidiageforcegtx1050ti
		},
		//Repeated items below
		{
			brand:"Nvidia",
			model:"rtx3060",
			price:849.99,
			description:`The EVGA GeForce RTX 3060 delivers the unprecedented performance that gamers crave for 4K 
				resolution gaming, powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and
				Tensor Cores, streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
				Combined with the next generation of design, cooling, and overclocking with EVGA Precision XI, the
				EVGA GeForce RTX 3080 Series presents a modern definition in ultimate performance.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx3060
		},
		{
			brand:"Nvidia",
			model:"rtx2060",
			price:699.99,
			description:`The EVGA GeForce RTX 20-Series Graphics Cards are powered by the all-new NVIDIA Turing
			architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion.
			With the EVGA GeForce RTX 20-Series gaming cards you get the best gaming experience with next generation
			graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision
			X1 software. The new NVIDIA GeForce RTX GPUs have reinvented graphics and set a new bar for perfrmance.
			Powered by the new NVIDIA Turing GPU architecture and the revolutionary NVIDI RTX platform, the new graphics
			cards bring together real-time ray tracing, artificial intelligence, and programmable shading. This is not
			only a whole new way to experience games - this is the ultimate PC gaming experience.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx2060
		},
		{
			
			brand:"Nvidia",
			model:"rtx3090",
			price:2299.99,
			description:`VENTUS brings a performance-focused design that maintains the essentials to accomplish any task at
			hand. A capable triple fan arrangement laid into a rigid industrial design lets this sharp looking graphics card
			fit into any build. The GeForce RTX 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered
			by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced RT Cores, 
			Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver 
			the ultimate gaming experience.`,
			memory:24,
			memoryUnit:"GB",
			image:nvidiageforcertx3090
		},
		{	
			
			brand:"Nvidia",
			model:"gtx1050ti",
			price:199.80,
			description:`Gigabyte G1 Gaming Series graphics cards are crafted for perfection in pursuit of the ultimate
			graphics experience for gaming enthusiasts. Based on the revolutionary NVIDIA Pascal GPU architecture, G1
			gaming graphics card brings you incredible gaming experience. -Pascal-powered graphics card give you superior
			performance and power efficiency -Classic and modern games at 1080p @ 60 FPS -Fast, smooth, power-efficient
			gaming experiences`,
			memory:4,
			memoryUnit:"GB",
			image:nvidiageforcegtx1050ti
		},
		{
			brand:"Nvidia",
			model:"rtx3060",
			price:849.99,
			description:`The EVGA GeForce RTX 3060 delivers the unprecedented performance that gamers crave for 4K 
				resolution gaming, powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and
				Tensor Cores, streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
				Combined with the next generation of design, cooling, and overclocking with EVGA Precision XI, the
				EVGA GeForce RTX 3080 Series presents a modern definition in ultimate performance.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx3060
		},
		{
			brand:"Nvidia",
			model:"rtx2060",
			price:699.99,
			description:`The EVGA GeForce RTX 20-Series Graphics Cards are powered by the all-new NVIDIA Turing
			architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion.
			With the EVGA GeForce RTX 20-Series gaming cards you get the best gaming experience with next generation
			graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision
			X1 software. The new NVIDIA GeForce RTX GPUs have reinvented graphics and set a new bar for perfrmance.
			Powered by the new NVIDIA Turing GPU architecture and the revolutionary NVIDI RTX platform, the new graphics
			cards bring together real-time ray tracing, artificial intelligence, and programmable shading. This is not
			only a whole new way to experience games - this is the ultimate PC gaming experience.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx2060
		},
		{
			
			brand:"Nvidia",
			model:"rtx3090",
			price:2299.99,
			description:`VENTUS brings a performance-focused design that maintains the essentials to accomplish any task at
			hand. A capable triple fan arrangement laid into a rigid industrial design lets this sharp looking graphics card
			fit into any build. The GeForce RTX 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered
			by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced RT Cores, 
			Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver 
			the ultimate gaming experience.`,
			memory:24,
			memoryUnit:"GB",
			image:nvidiageforcertx3090
		},
		{	
			
			brand:"Nvidia",
			model:"gtx1050ti",
			price:199.80,
			description:`Gigabyte G1 Gaming Series graphics cards are crafted for perfection in pursuit of the ultimate
			graphics experience for gaming enthusiasts. Based on the revolutionary NVIDIA Pascal GPU architecture, G1
			gaming graphics card brings you incredible gaming experience. -Pascal-powered graphics card give you superior
			performance and power efficiency -Classic and modern games at 1080p @ 60 FPS -Fast, smooth, power-efficient
			gaming experiences`,
			memory:4,
			memoryUnit:"GB",
			image:nvidiageforcegtx1050ti
		},
		{
			brand:"Nvidia",
			model:"rtx3060",
			price:849.99,
			description:`The EVGA GeForce RTX 3060 delivers the unprecedented performance that gamers crave for 4K 
				resolution gaming, powered by the NVIDIA Ampere architecture. It's built with enhanced RT Cores and
				Tensor Cores, streaming multiprocessors, and superfast G6X memory for an amazing gaming experience.
				Combined with the next generation of design, cooling, and overclocking with EVGA Precision XI, the
				EVGA GeForce RTX 3080 Series presents a modern definition in ultimate performance.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx3060
		},
		{
			brand:"Nvidia",
			model:"rtx2060",
			price:699.99,
			description:`The EVGA GeForce RTX 20-Series Graphics Cards are powered by the all-new NVIDIA Turing
			architecture to give you incredible new levels of gaming realism, speed, power efficiency, and immersion.
			With the EVGA GeForce RTX 20-Series gaming cards you get the best gaming experience with next generation
			graphics performance, ice cold cooling, and advanced overclocking features with the all new EVGA Precision
			X1 software. The new NVIDIA GeForce RTX GPUs have reinvented graphics and set a new bar for perfrmance.
			Powered by the new NVIDIA Turing GPU architecture and the revolutionary NVIDI RTX platform, the new graphics
			cards bring together real-time ray tracing, artificial intelligence, and programmable shading. This is not
			only a whole new way to experience games - this is the ultimate PC gaming experience.`,
			memory:8,
			memoryUnit:"GB",
			image:nvidiageforcertx2060
		},
		{
			
			brand:"Nvidia",
			model:"rtx3090",
			price:2299.99,
			description:`VENTUS brings a performance-focused design that maintains the essentials to accomplish any task at
			hand. A capable triple fan arrangement laid into a rigid industrial design lets this sharp looking graphics card
			fit into any build. The GeForce RTX 3090 is a big ferocious GPU (BFGPU) with TITAN class performance. It's powered
			by Ampere—NVIDIA's 2nd gen RTX architecture—doubling down on ray tracing and AI performance with enhanced RT Cores, 
			Tensor Cores, and new streaming multiprocessors. Plus, it features a staggering 24 GB of G6X memory, all to deliver 
			the ultimate gaming experience.`,
			memory:24,
			memoryUnit:"GB",
			image:nvidiageforcertx3090
		},
		{	
			
			brand:"Nvidia",
			model:"gtx1050ti",
			price:199.80,
			description:`Gigabyte G1 Gaming Series graphics cards are crafted for perfection in pursuit of the ultimate
			graphics experience for gaming enthusiasts. Based on the revolutionary NVIDIA Pascal GPU architecture, G1
			gaming graphics card brings you incredible gaming experience. -Pascal-powered graphics card give you superior
			performance and power efficiency -Classic and modern games at 1080p @ 60 FPS -Fast, smooth, power-efficient
			gaming experiences`,
			memory:4,
			memoryUnit:"GB",
			image:nvidiageforcegtx1050ti
		}
	],
	
	ram: [
		{	
			brand:"Corsair",
			model:"Vengeance RGB",
			price:85.99,
			description:`Corsair Vengeance Pro Series memory modules are designed for overclocking on the latest 3rd and
			4th generation Intel Core platforms, with eight-layer PCBs and ICs specially selected for performance
			potential. The aluminum heat spreaders provide superior temperature management and have the aggressive
			look you want in your gaming rig. XMP 1.3 profiles allow for automatic, reliable overclocking. They're
			available in multiple colors to let you match your Vengeance Pro memory to your system's color scheme. As a
			bonus, they're priced to deliver class-leading value, so you'll have more room left in your system build
			budget. Speed Rating: PC3-12800 (1600MHz).`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr3",
			image:corsairvengeance
		},
		{	
			brand:"A-Tech",
			model:"FBACT2KIT",
			price:16.25,
			description:`An A-Tech RAM (Memory) upgrade is an easy, quick way to boost your desktop computer's performance
			by speeding up loading times, improving system responsiveness, and increasing your computer's ability to
			handle higher workloads. Take on more and multitask with ease with a simple and affordable A-Tech RAM upgrade!`,
			capacity:4,
			capacityUnit:"GB",
			type:"ddr2",
			image:atechfbact2kit
		},
		{	
			brand:"HyperX",
			model:"Fury",
			price:133.99,
			description:`HyperX FURY DDR4 RGB features RGB lighting and speeds up to 3733MHz for a stylish performance boost.
			It’s both XMP-ready and Ready for Ryzen, and is available in 2400MHz–3733MHz speeds, CL15–19 latencies, 8GB, 16GB,
			and 32GB module capacities, and 16GB–128GB kit capacities. Get Plug N Play auto-overclocking at 2400MHz and
			2666MHz speeds for your Intel or AMD-based system. FURY DDR4 RGB’s backed by a lifetime warranty, a worry-free,
			cost-effective upgrade.`,
			capacity:32,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfury
		},
		{	
			brand:"HyperX",
			model:"Furyblack",
			price:60.99,
			description:`Give your AMD- or Intel-based system the performance needed to stay atop the food chain with the 
			record-breaking, ultra-fast HyperX Predator DDR4. Boost your frame rate, keep your streams broadcasting smooth, 
			and plow through your highlight reel editing with speeds up to 4800MHz paired with quick CL12–CL19 timings. The 
			aggressive, stylish black heat spreader and matching black PCB will allow you to beat the heat and strike fear into
			the hearts of your foes. It’s available in single module capacities of 8GB–32GB and kits of 2, 4, and 8 with
			capacities of 16GB–256GB. Predator DDR4 is Intel XMP certified with profiles that are optimized for Intel’s latest
			chipsets – just select the hand-tuned profile in your BIOS and you’re ready to go.`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfuryblack
		},
		{	
			brand:"Corsair",
			model:"Dominator Platinum",
			price:476.72,
			description:`Corsair Dominator Platinum RGB DDR4 memory redefines premium DDR4 memory, with timeless iconic design, 
			superior craftsmanship and aluminum construction that's built to last. Powered by tightly-screened high-frequency
			memory chips, Dominator Platinum RGB ensures high frequency performance with generous room for overclocking thanks
			to a custom PCB cooled by CORSAIR's patented DHX cooling technology. Use Corsair iCUE software to customize
			virtually limitless lighting effects from 12 ultra-bright, individually addressable RGB LEDs, and stay informed with
			real-time frequency and temperature monitoring. Complete with wide compatibility with the latest motherboards,
			Intel XMP 2.0 support for simple setup, and a limited lifetime warranty, This is DDR4 memory in a class of its own. `,
			capacity:64,
			capacityUnit:"GB",
			type:"ddr4",
			image:corsairdominator
		},
		//Repeated items below
		{	
			brand:"Corsair",
			model:"Vengeance RGB",
			price:85.99,
			description:`Corsair Vengeance Pro Series memory modules are designed for overclocking on the latest 3rd and
			4th generation Intel Core platforms, with eight-layer PCBs and ICs specially selected for performance
			potential. The aluminum heat spreaders provide superior temperature management and have the aggressive
			look you want in your gaming rig. XMP 1.3 profiles allow for automatic, reliable overclocking. They're
			available in multiple colors to let you match your Vengeance Pro memory to your system's color scheme. As a
			bonus, they're priced to deliver class-leading value, so you'll have more room left in your system build
			budget. Speed Rating: PC3-12800 (1600MHz).`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr3",
			image:corsairvengeance
		},
		{	
			brand:"A-Tech",
			model:"FBACT2KIT",
			price:16.25,
			description:`An A-Tech RAM (Memory) upgrade is an easy, quick way to boost your desktop computer's performance
			by speeding up loading times, improving system responsiveness, and increasing your computer's ability to
			handle higher workloads. Take on more and multitask with ease with a simple and affordable A-Tech RAM upgrade!`,
			capacity:4,
			capacityUnit:"GB",
			type:"ddr2",
			image:atechfbact2kit
		},
		{	
			brand:"HyperX",
			model:"Fury",
			price:133.99,
			description:`HyperX FURY DDR4 RGB features RGB lighting and speeds up to 3733MHz for a stylish performance boost.
			It’s both XMP-ready and Ready for Ryzen, and is available in 2400MHz–3733MHz speeds, CL15–19 latencies, 8GB, 16GB,
			and 32GB module capacities, and 16GB–128GB kit capacities. Get Plug N Play auto-overclocking at 2400MHz and
			2666MHz speeds for your Intel or AMD-based system. FURY DDR4 RGB’s backed by a lifetime warranty, a worry-free,
			cost-effective upgrade.`,
			capacity:32,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfury
		},
		{	
			brand:"HyperX",
			model:"Furyblack",
			price:60.99,
			description:`Give your AMD- or Intel-based system the performance needed to stay atop the food chain with the 
			record-breaking, ultra-fast HyperX Predator DDR4. Boost your frame rate, keep your streams broadcasting smooth, 
			and plow through your highlight reel editing with speeds up to 4800MHz paired with quick CL12–CL19 timings. The 
			aggressive, stylish black heat spreader and matching black PCB will allow you to beat the heat and strike fear into
			the hearts of your foes. It’s available in single module capacities of 8GB–32GB and kits of 2, 4, and 8 with
			capacities of 16GB–256GB. Predator DDR4 is Intel XMP certified with profiles that are optimized for Intel’s latest
			chipsets – just select the hand-tuned profile in your BIOS and you’re ready to go.`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfuryblack
		},
		{	
			brand:"Corsair",
			model:"Dominator Platinum",
			price:476.72,
			description:`Corsair Dominator Platinum RGB DDR4 memory redefines premium DDR4 memory, with timeless iconic design, 
			superior craftsmanship and aluminum construction that's built to last. Powered by tightly-screened high-frequency
			memory chips, Dominator Platinum RGB ensures high frequency performance with generous room for overclocking thanks
			to a custom PCB cooled by CORSAIR's patented DHX cooling technology. Use Corsair iCUE software to customize
			virtually limitless lighting effects from 12 ultra-bright, individually addressable RGB LEDs, and stay informed with
			real-time frequency and temperature monitoring. Complete with wide compatibility with the latest motherboards,
			Intel XMP 2.0 support for simple setup, and a limited lifetime warranty, This is DDR4 memory in a class of its own. `,
			capacity:64,
			capacityUnit:"GB",
			type:"ddr4",
			image:corsairdominator
		},
		{	
			brand:"Corsair",
			model:"Vengeance RGB",
			price:85.99,
			description:`Corsair Vengeance Pro Series memory modules are designed for overclocking on the latest 3rd and
			4th generation Intel Core platforms, with eight-layer PCBs and ICs specially selected for performance
			potential. The aluminum heat spreaders provide superior temperature management and have the aggressive
			look you want in your gaming rig. XMP 1.3 profiles allow for automatic, reliable overclocking. They're
			available in multiple colors to let you match your Vengeance Pro memory to your system's color scheme. As a
			bonus, they're priced to deliver class-leading value, so you'll have more room left in your system build
			budget. Speed Rating: PC3-12800 (1600MHz).`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr3",
			image:corsairvengeance
		},
		{	
			brand:"A-Tech",
			model:"FBACT2KIT",
			price:16.25,
			description:`An A-Tech RAM (Memory) upgrade is an easy, quick way to boost your desktop computer's performance
			by speeding up loading times, improving system responsiveness, and increasing your computer's ability to
			handle higher workloads. Take on more and multitask with ease with a simple and affordable A-Tech RAM upgrade!`,
			capacity:4,
			capacityUnit:"GB",
			type:"ddr2",
			image:atechfbact2kit
		},
		{	
			brand:"HyperX",
			model:"Fury",
			price:133.99,
			description:`HyperX FURY DDR4 RGB features RGB lighting and speeds up to 3733MHz for a stylish performance boost.
			It’s both XMP-ready and Ready for Ryzen, and is available in 2400MHz–3733MHz speeds, CL15–19 latencies, 8GB, 16GB,
			and 32GB module capacities, and 16GB–128GB kit capacities. Get Plug N Play auto-overclocking at 2400MHz and
			2666MHz speeds for your Intel or AMD-based system. FURY DDR4 RGB’s backed by a lifetime warranty, a worry-free,
			cost-effective upgrade.`,
			capacity:32,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfury
		},
		{	
			brand:"HyperX",
			model:"Furyblack",
			price:60.99,
			description:`Give your AMD- or Intel-based system the performance needed to stay atop the food chain with the 
			record-breaking, ultra-fast HyperX Predator DDR4. Boost your frame rate, keep your streams broadcasting smooth, 
			and plow through your highlight reel editing with speeds up to 4800MHz paired with quick CL12–CL19 timings. The 
			aggressive, stylish black heat spreader and matching black PCB will allow you to beat the heat and strike fear into
			the hearts of your foes. It’s available in single module capacities of 8GB–32GB and kits of 2, 4, and 8 with
			capacities of 16GB–256GB. Predator DDR4 is Intel XMP certified with profiles that are optimized for Intel’s latest
			chipsets – just select the hand-tuned profile in your BIOS and you’re ready to go.`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfuryblack
		},
		{	
			brand:"Corsair",
			model:"Dominator Platinum",
			price:476.72,
			description:`Corsair Dominator Platinum RGB DDR4 memory redefines premium DDR4 memory, with timeless iconic design, 
			superior craftsmanship and aluminum construction that's built to last. Powered by tightly-screened high-frequency
			memory chips, Dominator Platinum RGB ensures high frequency performance with generous room for overclocking thanks
			to a custom PCB cooled by CORSAIR's patented DHX cooling technology. Use Corsair iCUE software to customize
			virtually limitless lighting effects from 12 ultra-bright, individually addressable RGB LEDs, and stay informed with
			real-time frequency and temperature monitoring. Complete with wide compatibility with the latest motherboards,
			Intel XMP 2.0 support for simple setup, and a limited lifetime warranty, This is DDR4 memory in a class of its own. `,
			capacity:64,
			capacityUnit:"GB",
			type:"ddr4",
			image:corsairdominator
		},
		{	
			brand:"Corsair",
			model:"Vengeance RGB",
			price:85.99,
			description:`Corsair Vengeance Pro Series memory modules are designed for overclocking on the latest 3rd and
			4th generation Intel Core platforms, with eight-layer PCBs and ICs specially selected for performance
			potential. The aluminum heat spreaders provide superior temperature management and have the aggressive
			look you want in your gaming rig. XMP 1.3 profiles allow for automatic, reliable overclocking. They're
			available in multiple colors to let you match your Vengeance Pro memory to your system's color scheme. As a
			bonus, they're priced to deliver class-leading value, so you'll have more room left in your system build
			budget. Speed Rating: PC3-12800 (1600MHz).`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr3",
			image:corsairvengeance
		},
		{	
			brand:"A-Tech",
			model:"FBACT2KIT",
			price:16.25,
			description:`An A-Tech RAM (Memory) upgrade is an easy, quick way to boost your desktop computer's performance
			by speeding up loading times, improving system responsiveness, and increasing your computer's ability to
			handle higher workloads. Take on more and multitask with ease with a simple and affordable A-Tech RAM upgrade!`,
			capacity:4,
			capacityUnit:"GB",
			type:"ddr2",
			image:atechfbact2kit
		},
		{	
			brand:"HyperX",
			model:"Fury",
			price:133.99,
			description:`HyperX FURY DDR4 RGB features RGB lighting and speeds up to 3733MHz for a stylish performance boost.
			It’s both XMP-ready and Ready for Ryzen, and is available in 2400MHz–3733MHz speeds, CL15–19 latencies, 8GB, 16GB,
			and 32GB module capacities, and 16GB–128GB kit capacities. Get Plug N Play auto-overclocking at 2400MHz and
			2666MHz speeds for your Intel or AMD-based system. FURY DDR4 RGB’s backed by a lifetime warranty, a worry-free,
			cost-effective upgrade.`,
			capacity:32,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfury
		},
		{	
			brand:"HyperX",
			model:"Furyblack",
			price:60.99,
			description:`Give your AMD- or Intel-based system the performance needed to stay atop the food chain with the 
			record-breaking, ultra-fast HyperX Predator DDR4. Boost your frame rate, keep your streams broadcasting smooth, 
			and plow through your highlight reel editing with speeds up to 4800MHz paired with quick CL12–CL19 timings. The 
			aggressive, stylish black heat spreader and matching black PCB will allow you to beat the heat and strike fear into
			the hearts of your foes. It’s available in single module capacities of 8GB–32GB and kits of 2, 4, and 8 with
			capacities of 16GB–256GB. Predator DDR4 is Intel XMP certified with profiles that are optimized for Intel’s latest
			chipsets – just select the hand-tuned profile in your BIOS and you’re ready to go.`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfuryblack
		},
		{	
			brand:"Corsair",
			model:"Dominator Platinum",
			price:476.72,
			description:`Corsair Dominator Platinum RGB DDR4 memory redefines premium DDR4 memory, with timeless iconic design, 
			superior craftsmanship and aluminum construction that's built to last. Powered by tightly-screened high-frequency
			memory chips, Dominator Platinum RGB ensures high frequency performance with generous room for overclocking thanks
			to a custom PCB cooled by CORSAIR's patented DHX cooling technology. Use Corsair iCUE software to customize
			virtually limitless lighting effects from 12 ultra-bright, individually addressable RGB LEDs, and stay informed with
			real-time frequency and temperature monitoring. Complete with wide compatibility with the latest motherboards,
			Intel XMP 2.0 support for simple setup, and a limited lifetime warranty, This is DDR4 memory in a class of its own. `,
			capacity:64,
			capacityUnit:"GB",
			type:"ddr4",
			image:corsairdominator
		},
		{	
			brand:"Corsair",
			model:"Vengeance RGB",
			price:85.99,
			description:`Corsair Vengeance Pro Series memory modules are designed for overclocking on the latest 3rd and
			4th generation Intel Core platforms, with eight-layer PCBs and ICs specially selected for performance
			potential. The aluminum heat spreaders provide superior temperature management and have the aggressive
			look you want in your gaming rig. XMP 1.3 profiles allow for automatic, reliable overclocking. They're
			available in multiple colors to let you match your Vengeance Pro memory to your system's color scheme. As a
			bonus, they're priced to deliver class-leading value, so you'll have more room left in your system build
			budget. Speed Rating: PC3-12800 (1600MHz).`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr3",
			image:corsairvengeance
		},
		{	
			brand:"A-Tech",
			model:"FBACT2KIT",
			price:16.25,
			description:`An A-Tech RAM (Memory) upgrade is an easy, quick way to boost your desktop computer's performance
			by speeding up loading times, improving system responsiveness, and increasing your computer's ability to
			handle higher workloads. Take on more and multitask with ease with a simple and affordable A-Tech RAM upgrade!`,
			capacity:4,
			capacityUnit:"GB",
			type:"ddr2",
			image:atechfbact2kit
		},
		{	
			brand:"HyperX",
			model:"Fury",
			price:133.99,
			description:`HyperX FURY DDR4 RGB features RGB lighting and speeds up to 3733MHz for a stylish performance boost.
			It’s both XMP-ready and Ready for Ryzen, and is available in 2400MHz–3733MHz speeds, CL15–19 latencies, 8GB, 16GB,
			and 32GB module capacities, and 16GB–128GB kit capacities. Get Plug N Play auto-overclocking at 2400MHz and
			2666MHz speeds for your Intel or AMD-based system. FURY DDR4 RGB’s backed by a lifetime warranty, a worry-free,
			cost-effective upgrade.`,
			capacity:32,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfury
		},
		{	
			brand:"HyperX",
			model:"Furyblack",
			price:60.99,
			description:`Give your AMD- or Intel-based system the performance needed to stay atop the food chain with the 
			record-breaking, ultra-fast HyperX Predator DDR4. Boost your frame rate, keep your streams broadcasting smooth, 
			and plow through your highlight reel editing with speeds up to 4800MHz paired with quick CL12–CL19 timings. The 
			aggressive, stylish black heat spreader and matching black PCB will allow you to beat the heat and strike fear into
			the hearts of your foes. It’s available in single module capacities of 8GB–32GB and kits of 2, 4, and 8 with
			capacities of 16GB–256GB. Predator DDR4 is Intel XMP certified with profiles that are optimized for Intel’s latest
			chipsets – just select the hand-tuned profile in your BIOS and you’re ready to go.`,
			capacity:16,
			capacityUnit:"GB",
			type:"ddr4",
			image:hyperxfuryblack
		},
		{	
			brand:"Corsair",
			model:"Dominator Platinum",
			price:476.72,
			description:`Corsair Dominator Platinum RGB DDR4 memory redefines premium DDR4 memory, with timeless iconic design, 
			superior craftsmanship and aluminum construction that's built to last. Powered by tightly-screened high-frequency
			memory chips, Dominator Platinum RGB ensures high frequency performance with generous room for overclocking thanks
			to a custom PCB cooled by CORSAIR's patented DHX cooling technology. Use Corsair iCUE software to customize
			virtually limitless lighting effects from 12 ultra-bright, individually addressable RGB LEDs, and stay informed with
			real-time frequency and temperature monitoring. Complete with wide compatibility with the latest motherboards,
			Intel XMP 2.0 support for simple setup, and a limited lifetime warranty, This is DDR4 memory in a class of its own. `,
			capacity:64,
			capacityUnit:"GB",
			type:"ddr4",
			image:corsairdominator
		}
	],

	storage: [
		{
			brand:"Samsung",
			model:"Evo",
			price:114.99,
			description:`The SSD you trust: The newest edition to the world's best-selling SATA SSD series, the Samsung 860 EVO
			SSD is specially designed to enhance performance of mainstream PCs and laptops. With the latest V-NAND technology,
			this fast and reliable Solid State Drive comes in a wide range of compatible form factors and capacities. Its
			enhanced performance delivers consistent speeds, even under heavy workloads and multi-tasking, allowing for faster
			file transfers. The 860 EVO performs at sequential read speeds of up to 550MB/s with Intelligent TurboWrite
			technology, and sequential write speeds of up to 520MB/s. The TurboWrite buffer size is upgraded from 12GB to 78GB
			(performance may vary based on user's system hardware and configuration). The 860 EVO also offers boosted endurance
			of up to 8x higher TBW (Terabytes Written) than the 850 EVO. Feel secure storing and rendering large-sized 4K videos
			and 3D data used by the latest applications.`,
			type:"ssd",
			capacity:1,
			capacityUnit:"TB",
			image:samsungevo1000
		},
		{
			brand:"Seagate",
			model:"ST3",
			price:79.99,
			description:`Store more, compute faster, and do it confidently with the proven reliability of BarraCuda internal hard
			drives. Perfect for designers, musicians, photographers, and video editors using multiple applications at once, these
			solutions offer uninterrupted performance, optimized read/write caching technology, and a variety of capacities and
			form factors to choose from. The result is a seamless experience backed by a two-year limited warranty and 20 years
			of hard drive innovation.`,
			type:"hdd",
			capacity:3,
			capacityUnit:"TB",
			image:seagatest3
		}
	],
	
	processors: [
		{
			brand:"AMD",
			model:"Ryzen 5 3600",
			price:199.99,
			description:`The world's most advanced processor in the desktop PC gaming segment
			Can deliver ultra-fast 100+ FPS performance in the world's most popular games
			6 cores and 12 processing threads bundled with the quiet AMD wraith stealth cooler max temps 95°C
			4 2 GHz max boost unlocked for overclocking 35 MB of game cache DDR4 3200 support
			For the advanced socket AM4 platform can support PCIe 4 0 on x570 motherboards`,
			speed:4.2,
			speedUnit:"GHz",
			image:amdryzen3600
		},
		{
			brand:"Intel",
			model:"Core i5 10400",
			price:159.99,
			description:`10th Gen Intel Core i5-10400 desktop processor optimized for gaming, creating, and
			productivity. Cooler included in the box. ONLY compatible with 400 series chipset based motherboard. 65W.`,
			speed:2.9,
			speedUnit:"GHz",
			image:inteli510400
		}
	],
	
	mice: [
		{
			brand:"Jelly Comb",
			model:"MS0001",
			price:9.99,
			description:`Smooth Navigation with Less Noise Mouse Click - Slim ergonomic design and smooth frosted surface
			for an incredible user experience. Quieter and Easier to click, make you concentrate on your work without
			disturbing others beside you. Plug and Play - Tiny wireless receiver conveniently slots into your computer's
			USB port, taking up minimal space. 1 AA battery needed (not included in the package).`,
			type:"wireless",
			image:jellycombms001
		},
		{
			brand:"Logitech",
			model:"MS525",
			price:24.95,
			description:`With micro-precise scrolling, ultra-smooth cursor control and super-long-and-reliable battery
			power, the compact Logitech Wireles Mouse M525 screams control—and personal style in your choice of sweet
			color combinations.`,
			type:"wireless",
			image:logitechm525
		},
		{
			brand:"Jelly Comb",
			model:"MS059",
			price:9.99,
			description:`This RGB backlit wired mouse only needs a light effect control button to switch the light effect
			you like. The four light modes : 1. Rainbow Breathing Light 2. Rainbow Streaming Light (Default) 3. Neon 4.
			Floating Light. You can switch freely according to your preferences.`,
			type:"wired",
			image:jellycombms059
		}
	],
	
	keyboards: [
		{
			brand:"Arteck",
			model:"HW-192",
			price:25.19,
			description:`Just simply insert the nano USB receiver into your computer like desktop or laptop, then the keyboard
			can be used instantly. No need driver. The Keyboard will work up to 33 feet or 10 meters. It allow you to gain quick
			access to common functions, such as volume level, playback control, copy paste text, and more. It also provides
			arrow keys, number pad with slim and compact design.`,
			image:arteckhw192,
			type:"wireless"
		},
		{
			brand:"Corsair",
			model:"K55",
			price:47.99,
			description:`The K55 RGB keyboard is your first step towards enhanced performance. Stay one step ahead with 6 dedicated
			on the fly programmable macro keys. Multi key anti-ghosting ensures your simultaneous key press combos are executed the
			way you wanted. The dedicated volume and media playback buttons enable control of all of your media without interrupting
			the game. RGB backlighting and intuitive lighting modes provide expressive lighting options, all under your control. Quiet,
			responsive keys provide a satisfying feel. The K55 RGB gaming keyboard comes with a detachable soft rubber wrist rest to
			ensure additional comfort during marathon gaming sessions. Keyboard cable type non-braided.`,
			image:corsairk55,
			type:"wired"
		}
	],
	
	






	
	wifi: [
		{
			brand:"Febsmart",
			model:"N600",
			price:19.99,
			description:`Feb Smart Wireless Dual Band N600(2.4GHz 300Mbps or 5GHz 300Mbps) PCI Express (PCIe) Wi-Fi adapter network
			card with 6dBi External Detachable WiFi antenna special designed for home and office use PCs Internet Surfing, Online
			Gaming and Video Streaming.`,
			type:"internal",
			image:febsmartn600
		},
		{
			brand:"TP-Link",
			model:"AC600",
			price:16.99,
			description:`TP-Link Long Range - AC600 USB 2. 0 Wi-Fi Adapter | 2. 4G/5G High Gain Dual Band Wireless Network Adapter
			for PC Desktop | Supports Windows 10, 8. 1, 8, 7, XP / Mac OS X 10. 9-10. 14 (Archer T2U Plus).`,
			type:"external",
			image:tplinkac600
		}
	],
	
	
}


export default data;
	