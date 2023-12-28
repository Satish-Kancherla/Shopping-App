/* import img1 from "./Computers/1.jpg";
import img2 from "./Computers/2.jpg"; */
import img3 from "./Computers/3.jpg";
import img4 from "./Computers/4.jpg";
import img5 from "./Computers/5.jpg";
import img6 from "./Computers/6.jpg";
import img7 from "./Computers/7.jpg";
import img8 from "./Computers/8.jpg";
import img9 from "./Computers/9.jpg";
import img10 from "./Computers/10.jpg";
import img101 from "./Computers/11.jpg";
import img102 from "./Computers/12.jpg";

import img11 from "./MenWear/1.jpg";
import img12 from "./MenWear/2.jpg";
import img13 from "./MenWear/3.jpg";
import img14 from "./MenWear/4.jpg";
import img15 from "./MenWear/5.jpg";
import img16 from "./MenWear/6.jpg";
import img17 from "./MenWear/7.jpg";
import img18 from "./MenWear/8.jpg";
import img19 from "./MenWear/9.jpg";
import img20 from "./MenWear/10.jpg";
import img21 from "./MenWear/11.jpg";
import img22 from "./MenWear/12.jpg";

import img31 from "./WomanWear/1.jpg"
import img32 from "./WomanWear/2.jpg";
import img33 from "./WomanWear/3.jpg";
import img34 from "./WomanWear/4.jpg";
import img35 from "./WomanWear/5.jpg";
import img36 from "./WomanWear/6.jpg";
import img37 from "./WomanWear/7.jpg";
import img38 from "./WomanWear/8.jpg";
import img39 from "./WomanWear/9.jpg";
import img40 from "./WomanWear/10.jpg";
import img41 from "./WomanWear/11.jpg";
import img42 from "./WomanWear/12.jpg";

import img51 from "./NewMobile/1.png";
import img52 from "./NewMobile/2.jpg";
import img53 from "./NewMobile/3.jpg";
import img54 from "./NewMobile/4.jpg";
import img55 from "./NewMobile/5.jpg";
import img56 from "./NewMobile/6.jpg";
import img57 from "./NewMobile/7.jpg";
import img58 from "./NewMobile/8.jpg";
import img59 from "./NewMobile/9.jpg";
import img60 from "./NewMobile/10.jpg";
import img61 from "./NewMobile/11.jpg";
import img62 from "./NewMobile/12.jpg";

import img71 from "./Watch/1.png";
import img72 from "./Watch/2.jpg";
import img73 from "./Watch/3.jpg";
import img74 from "./Watch/4.jpg";
import img75 from "./Watch/5.jpg";
import img76 from "./Watch/6.jpg";
import img77 from "./Watch/7.jpg";
import img78 from "./Watch/8.jpg";
import img79 from "./Watch/9.jpg";
import img80 from "./Watch/10.jpg";
import img81 from "./Watch/11.jpg";
import img82 from "./Watch/12.jpg";

const All_Data = [
    {
        "id": "71",
        "category": "Watch",
        "image": img71,
        "name": "Apple Watch Series 7",
        "model": "",
        "new_price": "399.00",
        "old_price": "499.00",
       
        "description": "The latest Apple Watch with a larger display and advanced health features."
    },
    {
        "id": "72",
        "category": "Watch",
        "image": img72,
        "name": "Samsung Galaxy Watch 4",
        "model": "",
        "new_price": "299.99",
        "old_price": "469.00",
    
       
        "description": "A Samsung smartwatch with comprehensive health tracking and versatile design."
    },
    {
        "id": "73",
        "category": "Watch",
        "image": img73,
        "name": "Fitbit Versa 3",
        "model": "",
        "new_price": "229.00",
        "old_price": "349.00",
       
        "description": "A Fitbit smartwatch with built-in GPS and fitness tracking capabilities."
    },
    {
        "id": "74",
        "category": "Watch",
        "image": img74,
        "name": "Garmin Forerunner 945",
        "model": "",
        "new_price": "599.50",
        "old_price": "999.00",
       
        "description": "A high-end Garmin GPS watch designed for serious athletes and outdoor enthusiasts."
    },
    {
        "id": "75",
        "category": "Watch",
        "image": img75,
        "name": "Fossil Gen 5",
    
        "new_price": "249.00",
        "old_price": "449.00",
       
        "description": "A stylish Fossil smartwatch with Wear OS and customizable watch faces."
    },
    {
        "id": "76",
        "category": "Watch",
        "image": img76,
        "name": "Casio G-Shock GA-2100",
        "model": "",
        "new_price": "129.99",
        "old_price": "150.00",
       
        "description": "A rugged and iconic G-Shock watch with a modern and slim design."
    },
    {
        "id": "77",
        "category": "Watch",
        "image": img77,
        "name": "TAG Heuer Carrera Calibre Heuer 02",
        "model": "",
        "new_price": "5999.00",
        "old_price": "7499.00",
        
        "description": "A luxurious TAG Heuer mechanical watch with a sporty and sophisticated design."
    },
    {
        "id": "78",
        "category": "Watch",
        "image": img78,
        "name": "Timex Weekender Chronograph",
        "model": "",
        "new_price": "89.00",
        "old_price": "200.00",
       
        "description": "A versatile Timex watch with a chronograph function and interchangeable straps."
    },
    {
        "id": "79",
        "category": "Watch",
        "image": img79,
        "name": "Citizen Eco-Drive Promaster",
        "model": "",
        "new_price": "299.99",
        "old_price": "320.00",
       
        "description": "A Citizen watch powered by light with durable construction for outdoor adventures."
    },
    {
        "id": "80",
        "category": "Watch",
        "image": img80,
        "name": "Seiko SKX007",
        "model": "",
        "new_price": "199.50",
        "old_price": "249.00",
       
        "description": "A classic Seiko diver's watch known for its reliability and timeless design."
    },
    {
        "id": "81",
        "category": "Watch",
        "image": img81,
        "name": "Michael Kors Access Lexington 2",
        "model": "Access Lexington 2",
        "new_price": "279.00",
        "old_price": "299.00",
       
        "description": "A Michael Kors smartwatch with a luxurious look and smart functionalities."
    },
    {
        "id": "82",
        "category": "Watch",
        "image": img82,
        "name": "Huawei Watch GT 3",
        "model": "",
        "new_price": "199.00",
        "old_price": "399.00",
       
        "description": "A Huawei smartwatch with long battery life and health monitoring features."
    },
    {
        "id": "51",
        "category": "Mobile",
        "image": img51,
        "name": "Apple iPhone 13 Pro",
        "model": "",
        "new_price": "1099.00",
        "old_price": "1099.00",
        
        "description": "The latest iPhone model with advanced camera capabilities and powerful performance."
    },
    {
        "id": "52",
        "category": "Mobile",
        "image": img52,
        "name": "Samsung Galaxy Z Fold 3",
        "model": "",
        "new_price": "1799.00",
        "old_price": "1999.00",
        
        "description": "A foldable smartphone with a large display and multitasking features."
    },
    {
        "id": "53",
        "category": "Mobile",
        "image": img53,
        "name": "Google Pixel 6",
        "model": "",
        "new_price": "799.99",
        "old_price": "999.00",
        
        "description": "A Google Pixel phone with exceptional camera quality and the latest Android features."
    },
    {
        "id": "54",
        "category": "Mobile",
        "image": img54,
        "name": "OnePlus",
        "model": "9 Pro",
        "new_price": "899.00",
        "old_price": "999.00",
        
        "description": "A flagship OnePlus phone known for its smooth performance and fast charging."
    },
    {
        "id": "55",
        "category": "Mobile",
        "image": img55,
        "name": "Xiaomi",
        "model": "Mi 11 Ultra",
        "new_price": "999.50",
        "old_price": "1099.00",
        
        "description": "A high-spec Xiaomi phone with a versatile camera system and powerful hardware."
    },
    {
        "id": "56",
        "category": "Mobile",
        "image": img56,
        "name": "Sony",
        "model": "Xperia 1 III",
        "new_price": "1199.00",
        "old_price": "1499.00",
        
        "description": "A Sony Xperia phone with a 4K display and pro-level camera features."
    },
    {
        "id": "57",
        "category": "Mobile",
        "image": img57,
        "name": "LG",
        "model": "G9 ThinQ",
        "new_price": "749.00",
        "old_price": "899.00",
        
        "description": "An LG smartphone with AI-enhanced features and a sleek design."
    },
    {
        "id": "58",
        "category": "Mobile",
        "image": img58,
        "name": "Motorola",
        "model": "Edge 20",
        "new_price": "599.99",
        "old_price": "1199.00",
        
        "description": "A Motorola Edge phone with 5G capabilities and a high-refresh-rate display."
    },
    {
        "id": "59",
        "category": "Mobile",
        "image": img59,
        "name": "Huawei",
        "model": "P50 Pro",
        "new_price": "1299.00",
        "old_price": "1499.00",
        
        "description": "A Huawei flagship phone with advanced camera technology and sleek aesthetics."
    },
    {
        "id": "60",
        "category": "Mobile",
        "image": img60,
        "name": "Oppo",
        "model": "Find X5 Pro",
        "new_price": "899.50",
        "old_price": "1099.00",
        
        "description": "An Oppo Find X phone with innovative design and impressive camera features."
    },
    {
        "id": "61",
        "category": "Mobile",
        "image": img61,
        "name": "Nokia 8.4 5G",
        "model": "",
        "new_price": "549.00",
        "old_price": "899.00",
        
        "description": "A Nokia smartphone with 5G connectivity and a focus on reliability."
    },
    {
        "id": "62",
        "category": "Mobile",
        "image": img62,
        "name": "Realme GT Master Edition",
        "model": "",
        "new_price": "379.99",
        "old_price": "499.00",
        
        "description": "A Realme phone designed in collaboration with a renowned designer, featuring a unique aesthetic."
    },
    {
        "id": "31",
        "category": "WomanWear",
        "image": img31,
        "type": "Dress",
        "name": "Zara Flowy Maxi",
        "model": "",
        "new_price": "79.99",
        "old_price": "99.99",
        
        "description": "A flowy maxi dress with floral patterns, perfect for summer occasions."
    },
    {
        "id": "32",
        "category": "WomanWear",
        "image": img32,
        "type": "Blouse",
        "name": "H&M Classic Silk",
        "model": "",
        "new_price": "49.90",
        "old_price": "60.99",
        
        "description": "A classic silk blouse suitable for professional and casual settings."
    },
    {
        "id": "33",
        "category": "WomanWear",
        "image": img33,
        "type": "Jeans",
        "name": "Levi's 501 Skinny",
        "model": "",
        "new_price": "89.50",
        "old_price": "95.99",
        
        "description": "Skinny fit jeans with a classic 5-pocket design, perfect for everyday wear."
    },
    {
        "id": "34",
        "category": "WomanWear",
        "image": img34,
        "type": "Jumpsuit",
        "name": "Forever 21 Utility Jumpsuit",
        "model": "",
        "new_price": "59.99",
        "old_price": "65.00",
        
        "description": "A utility-style jumpsuit with a modern and versatile look."
    },
    {
        "id": "35",
        "category": "WomanWear",
        "image": img35,
        "type": "Skirt",
        "name": "Topshop A-Line Mini",
        "model": "",
        "new_price": "39.99",
        "old_price": "50.00",
        
        "description": "A stylish A-line mini skirt with a retro touch, suitable for various occasions."
    },
    {
        "id": "36",
        "category": "WomanWear",
        "image": img36,
        "type": "Sweater",
        "name": "Gap Cable Knit",
        "model": "",
        "new_price": "49.95",
        "old_price": "62.00",
        
        "description": "A cozy cable knit sweater with a timeless design, perfect for chilly days."
    },
    {
        "id": "37",
        "category": "WomanWear",
        "image": img37,
        "type": "Blazer",
        "name": "Mango Tailored Blazer",
        "model": "",
        "new_price": "79.99",
        "old_price": "90.50",
        
        "description": "A tailored blazer with a chic silhouette, suitable for formal and casual looks."
    },
    {
        "id": "38",
        "category": "WomanWear",
        "image": img38,
        "type": "Activewear",
        "name": "Lululemon Align Leggings",
        "model": "",
        "new_price": "98.00",
        "old_price": "190.00",
        
        "description": "High-quality leggings with a buttery soft feel, ideal for yoga and workouts."
    },
    {
        "id": "39",
        "category": "WomanWear",
        "image": img39,
        "type": "Swimwear",
        "name": "Secret Bikini Set",
        "model": "",
        "new_price": "59.50",
        "old_price": "65.00",
        
        "description": "A stylish bikini set with vibrant patterns, perfect for beach days."
    },
    {
        "id": "40",
        "category": "WomanWear",
        "image": img40,
        "type": "Pants Hollister",
        "name": "High-Rise Skinny",
        "model": "",
        "new_price": "49.95",
        "old_price": "90.00",
        
        "description": "High-rise skinny pants with a flattering fit, suitable for various occasions."
    },
    {
        "id": "41",
        "category": "WomanWear",
        "image": img41,
        "type": "Coat",
        "name": "Voltaire Wool Blend Coat",
        "model": "",
        "new_price": "299.00",
        "old_price": "599.00",
        
        "description": "A stylish wool blend coat with a modern and elegant design, perfect for colder days."
    },
    {
        "id": "42",
        "category": "WomanWear",
        "image": img42,
        "type": "T-Shirt",
        "name": "Eagle Graphic Tee",
        "model": " ",
        "new_price": "24.95",
        "old_price": "39.99",
        
        "description": "A casual graphic tee with trendy prints, suitable for relaxed everyday outfits."
    },
    {
    "id": "1",
    "category": "Computer",
    "image": img101,
    "name": "Dell Inspiron 15",
    "model": "",
    "new_price": "899.99",
    "old_price": "1099.00",
    
    "description": "A versatile laptop with powerful performance and a sleek design."
},
{
    "id": "2",
    "category": "Computer",
    "image": img102,
    "name": "HP Pavilion 27",
    "model": "",
    "new_price": "1299.00",
    "old_price": "1999.00",
    
    "description": "An all-in-one desktop PC with a large display and high-speed processing."
},
{
    "id": "3",
    "category": "Computer",
    "image": img3,
    "name": "Apple MacBook Air",
    "model": "",
    "new_price": "1199.00",
    "old_price": "1799.00",
    
    "description": "An ultrathin and lightweight laptop known for its portability and smooth performance."
},
{
    "id": "4",
    "category": "Computer",
    "image": img4,
    "name": "Lenovo IdeaPad Flex",
    "model": "",
    "new_price": "799.50",
    "old_price": "1799.00",
    
    "description": "A flexible 2-in-1 laptop with touchscreen capabilities and powerful processing."
},
{
    "id": "5",
    "category": "Computer",
    "image": img5,
    "name": "Acer Predator Helios 300",
    "model": "",
    "new_price": "1299.00",
    "old_price": "2299.00",
    
    "description": "A gaming laptop with high-performance graphics and advanced cooling technology."
},
{
    "id": "6",
    "category": "Computer",
    "image": img6,
    "name": "Microsoft Surface Pro 7",
    "model": "",
    "new_price": "999.99",
    "old_price": "1399.00",
    
    "description": "A versatile 2-in-1 tablet and laptop with a detachable keyboard and stylus support."
},
{
    "id": "7",
    "category": "Computer",
    "image": img7,
    "name": "Asus ZenBook 14",
    "model": "",
    "new_price": "899.00",
    "old_price": "1099.00",
    
    "description": "A compact laptop with a premium build, strong performance, and long battery life."
},
{
    "id": "8",
    "category": "Computer",
    "image": img8,
    "name": "Alienware Aurora R10",
    "model": "",
    "new_price": "1999.00",
    "old_price": "2999.00",
    
    "description": "A high-end gaming desktop with customizable components and advanced graphics capabilities."
},
{
    "id": "9",
    "category": "Computer",
    "image": img9,
    "name": "HP EliteBook 840",
    "model": "",
    "new_price": "1299.00",
    "old_price": "1999.00",
    
    "description": "A business laptop with robust security features, reliable performance, and sleek design."
},
{
    "id": "10",
    "category": "Computer",
    "image": img10,
    "name": "Lenovo ThinkCentre M720",
    "model": "",
    "new_price": "799.00",
    "old_price": "999.00",
    
    "description": "A compact and powerful desktop computer suitable for business and categoryivity tasks."
},
{
    "id": "101",
    "category": "Computer",
    "image": img101,
    "name": "Dell XPS 13",
    "model": "",
    "new_price": "1499.00",
    "old_price": "1899.00",
    
    "description": "A premium ultrabook with a stunning display, strong performance, and sleek design."
},
{
    "id": "102",
    "category": "Computer",
    "image": img102,
    "name": "Acer Chromebook 14",
    "model": "",
    "new_price": "349.99",
    "old_price": "499.00",
    
    "description": "A lightweight and affordable laptop running on Chrome OS, ideal for web-based tasks."
},
{
    "id": "11",
    "category": "Men",
    "image": img11,
    "type": "T-Shirt",
    "name": "Nike Sporty Tee",
    "model": "",
    "new_price": "29.99",
    "old_price": "42.55",
    
    "description": "A comfortable and stylish sporty t-shirt with moisture-wicking fabric."
},
{
    "id": "12",
    "category": "Men",
    "image": img12,
    "type": "Dress Shirt",
    "model": "",
    "name": "Calvin Klein ClassicFit",
    "new_price": "49.99",
    "old_price": "56.00",
    
    "description": "A classic fit dress shirt made from high-quality fabric, suitable for formal occasions."
},
{
    "id": "13",
    "category": "Men",
    "image": img13,
    "type": "Jeans",
    "name": "Levi's 511 Slim Fit",
    "model": "",
    "new_price": "59.50",
    "old_price": "80.00",
    
    "description": "Slim fit jeans with a modern look, perfect for casual outings."
},
{
    "id": "14",
    "category": "Men",
    "image": img14,
    "type": "Polo Shirt",
    "name": "Ralph Lauren Signature Polo",
    "model": "",
    "new_price": "69.00",
    "old_price": "75.00",
    
    "description": "A classic polo shirt with the iconic Ralph Lauren logo, ideal for a refined casual look."
},
{
    "id": "15",
    "category": "Men",
    "image": img15,
    "type": "Jacket",
    "name": "The North Face Apex Bionic",

    "new_price": "129.99",
    "old_price": "200.00",
    
    "description": "A versatile softshell jacket designed for outdoor activities and everyday wear."
},
{
    "id": "16",
    "category": "Men",
    "image": img16,
    "type": "Shorts",
    "name": "Under Armour Tech Mesh Shorts",
    "model": "",
    "new_price": "34.99",
    "old_price": "50.99",

    
    "description": "Lightweight and breathable mesh shorts for workouts and active lifestyles."
},
{
    "id": "17",
    "category": "Men",
    "image": img17,
    "type": "Sweater",
    "name": "Tommy Hilfiger Crewneck Sweater",
    "model": "",
    "new_price": "79.50",
    "old_price": "99.99",

    
    "description": "A classic crewneck sweater made from soft and comfortable materials."
},
{
    "id": "18",
    "category": "Men",
    "image": img18,
    "type": "Suit",
    "name": "Hugo Boss ModernFit Suit",
    "model": "",
    "new_price": "499.00",
    "old_price": "599.99",

    
    "description": "A modern-fit suit crafted with attention to detail, perfect for formal occasions."
},
{
    "id": "19",
    "category": "Men",
    "image": img19,
    "type": "Hoodie",
    "name": "Adidas Essentials Hoodie",
    "model": "",
    "new_price": "44.99",
    "old_price": "59.99",
    
    "description": "A comfortable and stylish hoodie with the Adidas logo, suitable for everyday wear."
},
{
    "id": "20",
    "category": "Men",
    "image": img20,
    "type": "Chinos",
    "name": "Dockers Alpha Khak",
    "model": "i",
    "new_price": "39.99",
    "old_price": "69.99",
    "description": "Versatile chino pants with a modern slim fit, suitable for casual and semi-formal occasions."
},
{
    "id": "21",
    "category": "Men",
    "image": img21,
    "type": "Swim Trunks",
    "name": "Speedo Endurance+ Swim Trunks",
    "model": "",
    "new_price": "29.50",
    "old_price": "49.99",
    
    "description": "Durable and comfortable swim trunks designed for performance and comfort in the water."
},
{
    "id": "22",
    "category": "Men",
    "image": img22,
    "type": "Blazer",
    "name": "Brothers Classic Blazer",
    "model": "",
    "new_price": "189.00",
    "old_price": "199.99",
    
    "description": "A timeless classic blazer suitable for both professional and smart-casual looks."
}]


export default All_Data;