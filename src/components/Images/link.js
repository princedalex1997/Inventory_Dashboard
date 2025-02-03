import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
  HiOutlineQuestionMarkCircle,
  HiOutlineCog,
} from "react-icons/hi";
import { FcSalesPerformance } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";


export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid />,
  },
  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiOutlineCube />,
  },
  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart />,
  },
  {
    key: "customers",
    label: "Customers",
    path: "/customers",
    icon: <HiOutlineUsers />,
  },
  {
    key: "transactions",
    label: "Transactions",
    path: "/transactions",
    icon: <HiOutlineDocumentText />,
  },
  {
    key: "messages",
    label: "Messages",
    path: "/messages",
    icon: <HiOutlineAnnotation />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];

export const GRID_LIST_ITEM = [
  {
    key: "sales",
    label: "Total Profit",
	path:"/products",
    icon: <FcSalesPerformance />,
	count:"$54232",
	balance:334
  },
  {
    key: "expenses",
    label: "Total Expenses",
	count:"$3423",
	balance:251,
	path:"/orders",
    icon: <MdAttachMoney color="blue" />,
  },
  {
    key: "total_customers",
    label: "New Customers",
	count:1273,
	balance:30,
	path:"/customers",
    icon: <BsPeopleFill color="red" />,
  },
  {
    key: "orders",
    label: "Total Orders",
	count:16423,
	balance:51,
	path:"/orders",
    icon: <TiShoppingCart  color="blue"/>,
  },
];

export const chartData = [
	{
		name: 'Jan',
		Expense: 4000,
		Income: 2400
	},
	{
		name: 'Feb',
		Expense: 3000,
		Income: 1398
	},
	{
		name: 'Mar',
		Expense: 2000,
		Income: 9800
	},
	{
		name: 'Apr',
		Expense: 2780,
		Income: 3908
	},
	{
		name: 'May',
		Expense: 1890,
		Income: 4800
	},
	{
		name: 'Jun',
		Expense: 2390,
		Income: 3800
	},
	{
		name: 'July',
		Expense: 3490,
		Income: 4300
	},
	{
		name: 'Aug',
		Expense: 2000,
		Income: 9800
	},
	{
		name: 'Sep',
		Expense: 2780,
		Income: 3908
	},
	{
		name: 'Oct',
		Expense: 1890,
		Income: 4800
	},
	{
		name: 'Nov',
		Expense: 2390,
		Income: 3800
	},
	{
		name: 'Dec',
		Expense: 3490,
		Income: 4300
	}
]

export const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdIZ1PjxfqA9_srJTWB1K48u6qhu0-ev1dJd6Ob0xl4sT2okBcVg0xbXWgAWBFo2d1yPoTOmN647uhfK79QfBCbc2WzeD_nKrx0NiNvRVxHi6pPsWRecUI&usqp=CAE',
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail: 'https://ringke.co.in/cdn/shop/files/61QbMHeOEaL._SL1500.jpg?v=1691496163',
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail: 'https://m.media-amazon.com/images/I/71yKxEaoVqL.jpg',
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9lYqdyBTCnuVMZLksRZNi3no9GKzhERgehw&s',
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail: 'https://guide-images.cdn.ifixit.com/igi/YImFsxtyZH5jNLCo.medium',
		product_price: '$699.00',
		product_stock: 0
	},
	
]

export const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Los Angeles, CA 90017'
	}
]

export const productsList = [
	{
	  id: "3432",
	  product_name: 'Macbook M1 Pro 14"',
	  product_price: "$1499.00",
	  product_stock: 341,
	},
	{
	  id: "7633",
	  product_name: "Samsung Galaxy Buds 2",
	  product_price: "$399.00",
	  product_stock: 24,
	},
	{
	  id: "6534",
	  product_name: "Asus Zenbook Pro",
	  product_price: "$899.00",
	  product_stock: 56,
	},
	{
	  id: "9234",
	  product_name: "LG Flex Canvas",
	  product_price: "$499.00",
	  product_stock: 98,
	},
	{
	  id: "4314",
	  product_name: "Apple Magic Touchpad",
	  product_price: "$699.00",
	  product_stock: 0,
	},
	{
	  id: "7891",
	  product_name: "Sony WH-1000XM4 Headphones",
	  product_price: "$349.00",
	  product_stock: 76,
	},
	{
	  id: "1245",
	  product_name: "Google Nest Hub",
	  product_price: "$129.00",
	  product_stock: 15,
	},
	{
	  id: "5678",
	  product_name: "Dell XPS 13",
	  product_price: "$1099.00",
	  product_stock: 45,
	},
	{
	  id: "9021",
	  product_name: "HP Envy x360",
	  product_price: "$799.00",
	  product_stock: 30,
	},
	{
	  id: "3456",
	  product_name: "Logitech MX Master 3 Mouse",
	  product_price: "$99.00",
	  product_stock: 150,
	},
	{
	  id: "1239",
	  product_name: "Samsung Galaxy Watch 5",
	  product_price: "$249.00",
	  product_stock: 78,
	},
	{
	  id: "6789",
	  product_name: "Amazon Echo Dot (4th Gen)",
	  product_price: "$49.00",
	  product_stock: 200,
	},
	{
	  id: "9876",
	  product_name: "Microsoft Surface Laptop 5",
	  product_price: "$1199.00",
	  product_stock: 25,
	},
	{
	  id: "2222",
	  product_name: "Razer BlackWidow Keyboard",
	  product_price: "$129.00",
	  product_stock: 60,
	},
	{
	  id: "3333",
	  product_name: "Anker PowerCore 20000mAh",
	  product_price: "$49.00",
	  product_stock: 500,
	},
  ];

export const customersList = [
	{
	  customer_id: "CUST001",
	  name: "John Doe",
	  email: "john.doe@example.com",
	  phone: "9876543210",
	  address: "123 Main St, Springfield",
	  registration_date: "2023-02-15",
	},
	{
	  customer_id: "CUST002",
	  name: "Jane Smith",
	  email: "jane.smith@example.com",
	  phone: "8765432109",
	  address: "456 Elm St, Metropolis",
	  registration_date: "2023-03-18",
	},
	{
	  customer_id: "CUST003",
	  name: "Michael Brown",
	  email: "michael.brown@example.com",
	  phone: "7654321098",
	  address: "789 Oak St, Gotham",
	  registration_date: "2023-01-25",
	},
	{
	  customer_id: "CUST004",
	  name: "Emily Johnson",
	  email: "emily.johnson@example.com",
	  phone: "6543210987",
	  address: "321 Pine St, Star City",
	  registration_date: "2023-05-10",
	},
	{
	  customer_id: "CUST005",
	  name: "Daniel Williams",
	  email: "daniel.williams@example.com",
	  phone: "5432109876",
	  address: "654 Cedar St, Central City",
	  registration_date: "2023-04-12",
	},
	{
	  customer_id: "CUST006",
	  name: "Sophia Martinez",
	  email: "sophia.martinez@example.com",
	  phone: "4321098765",
	  address: "987 Maple St, Smallville",
	  registration_date: "2023-06-20",
	},
	{
	  customer_id: "CUST007",
	  name: "David Garcia",
	  email: "david.garcia@example.com",
	  phone: "3210987654",
	  address: "123 Birch St, Coast City",
	  registration_date: "2023-07-05",
	},
	{
	  customer_id: "CUST008",
	  name: "Olivia Wilson",
	  email: "olivia.wilson@example.com",
	  phone: "2109876543",
	  address: "456 Willow St, Keystone City",
	  registration_date: "2023-08-15",
	},
	{
	  customer_id: "CUST009",
	  name: "James Anderson",
	  email: "james.anderson@example.com",
	  phone: "1098765432",
	  address: "789 Ash St, National City",
	  registration_date: "2023-09-30",
	},
	{
	  customer_id: "CUST010",
	  name: "Isabella Taylor",
	  email: "isabella.taylor@example.com",
	  phone: "9876543211",
	  address: "321 Fir St, Hub City",
	  registration_date: "2023-10-12",
	},
	{
	  customer_id: "CUST011",
	  name: "Ethan Thomas",
	  email: "ethan.thomas@example.com",
	  phone: "8765432108",
	  address: "654 Poplar St, Hill Valley",
	  registration_date: "2023-11-02",
	},
	{
	  customer_id: "CUST012",
	  name: "Mia Clark",
	  email: "mia.clark@example.com",
	  phone: "7654321097",
	  address: "987 Spruce St, Sunnydale",
	  registration_date: "2023-11-18",
	},
	{
	  customer_id: "CUST013",
	  name: "Alexander Lewis",
	  email: "alexander.lewis@example.com",
	  phone: "6543210986",
	  address: "123 Cypress St, Angel Grove",
	  registration_date: "2023-12-05",
	},
	{
	  customer_id: "CUST014",
	  name: "Ava Walker",
	  email: "ava.walker@example.com",
	  phone: "5432109875",
	  address: "456 Chestnut St, Beacon Hills",
	  registration_date: "2023-12-20",
	},
	{
	  customer_id: "CUST015",
	  name: "Lucas Hall",
	  email: "lucas.hall@example.com",
	  phone: "4321098764",
	  address: "789 Redwood St, Riverdale",
	  registration_date: "2023-12-30",
	},
  ];
  

  
  