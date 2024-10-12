// async await in js

const viewDetails = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
  );

  const data = await res.json();
  const datass = data.meals;
  datass.map((datas) => {
    console.log(datas.strCategory
	);
  });
};

viewDetails();
