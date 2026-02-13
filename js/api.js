const fetchMenu = async () => {
    // Api'a istek at
  const res = await fetch("../db.json");

  // Api'dan gelen cevabı json formatına çevir
  const data =await res.json();

  // Data içerisindeki menu'yü bu fonksyon çağırıldığında return et
  return data.menu;

};

export default fetchMenu;





