//Backup

const fruitsList = [
  {
    genus: "Malus",
    name: "Apple",
    id: 6,
    family: "Rosaceae",
    order: "Rosales",
    urlImage:
      "https://nextdayshopper.com/wp-content/uploads/2020/04/5b7ad435200000420034abec.jpeg",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
  },
  {
    genus: "Musa",
    name: "Banana",
    id: 1,
    family: "Musaceae",
    order: "Zingiberales",
    urlImage:
      "https://target.scene7.com/is/image/Target/GUEST_f5d0cfc3-9d02-4ee0-a6c6-ed5dc09971d1?wid=488&hei=488&fmt=pjpeg",
    nutritions: {
      carbohydrates: 22,
      protein: 1,
      fat: 0.2,
      calories: 96,
      sugar: 17.2,
    },
  },
  {
    genus: "Fragaria",
    name: "Blueberry",
    id: 33,
    family: "Rosaceae",
    order: "Rosales",
    urlImage:
      "https://cdn11.bigcommerce.com/s-87vyabt6jh/images/stencil/2048x2048/products/197/563/blueberries__07317.1494297939.jpg?c=2",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Prunus",
    name: "Cherry",
    urlImage:
      "https://triblive.com/wp-content/uploads/2019/08/1561312_web1_gtr-liv-cherries-02-082119.jpg",
    id: 9,
    family: "Rosaceae",
    order: "None",
    nutritions: {
      carbohydrates: 12,
      protein: 1,
      fat: 0.3,
      calories: 50,
      sugar: 8,
    },
  },
  {
    genus: "Citrus",
    name: "Lemon",
    urlImage:
      "https://i5.walmartimages.ca/images/Enlarge/094/504/6000200094504.jpg",
    id: 26,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 9,
      protein: 1.1,
      fat: 0.3,
      calories: 29,
      sugar: 2.5,
    },
  },
  {
    genus: "Mangifera",
    name: "Mango",
    urlImage:
      "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-mango.jpg",
    id: 27,
    family: "Anacardiaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.82,
      fat: 0.38,
      calories: 60,
      sugar: 13.7,
    },
  },
  {
    genus: "Citrus",
    name: "Orange",
    urlImage:
      "https://fruitguys.co.il/wp-content/uploads/2019/11/Screenshot_2019-11-04-18-41-33-402-324x324.jpeg",
    id: 2,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 8.3,
      protein: 1,
      fat: 0.2,
      calories: 43,
      sugar: 8.2,
    },
  },
  {
    genus: "Pyrus",
    name: "Pear",
    urlImage:
      "https://4.imimg.com/data4/UA/CL/ANDROID-46992190/product-500x500.jpeg",
    id: 4,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.4,
      fat: 0.1,
      calories: 57,
      sugar: 10,
    },
  },
  {
    genus: "Ananas",
    name: "Pineapple",
    urlImage: "https://www.planetorganic.com/images/products/large/1874.jpg",
    id: 10,
    family: "Bromeliaceae",
    order: "Poales",
    nutritions: {
      carbohydrates: 13.12,
      protein: 0.54,
      fat: 0.12,
      calories: 50,
      sugar: 9.85,
    },
  },
  {
    genus: "Rubus",
    name: "Raspberry",
    urlImage:
      "https://cdn.shopify.com/s/files/1/2971/2126/products/Raspberry_ed3f1df5-030e-4999-ab05-732f0c679196_2000x.jpg?v=1594159460",
    id: 23,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 12,
      protein: 1.2,
      fat: 0.7,
      calories: 53,
      sugar: 4.4,
    },
  },
  {
    genus: "Fragaria",
    name: "Strawberry",
    urlImage:
      "https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-strawberrie-558x600.jpg",
    id: 3,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0.8,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Solanum",
    name: "Tomato",
    urlImage:
      "https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=",
    id: 5,
    family: "Solanaceae",
    order: "Solanales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.9,
      fat: 0.2,
      calories: 74,
      sugar: 2.6,
    },
  },
  {
    genus: "Citrullus",
    name: "Watermelon",
    urlImage:
      "https://images-na.ssl-images-amazon.com/images/I/41T-2IipYVL.jpg",
    id: 25,
    family: "Cucurbitaceae",
    order: "Cucurbitales",
    nutritions: {
      carbohydrates: 8,
      protein: 0.6,
      fat: 0.2,
      calories: 30,
      sugar: 6,
    },
  },
];

module.exports = { fruitsList };
