<script setup>
import axios from 'axios';
import { nextTick, ref } from 'vue';
import cars from '../src/cars.json'

const imageUrl = "https://s3-us-west-2.amazonaws.com/images.collecthw.com/"

let fetchedCars = [{
  AssortmentNum: "FPY86",
  BaseCodes: "",
  BaseColor: "Black",
  BaseType: "Metal",
  CardVariant: null,
  CaseNum: "",
  Col: "",
  Color: "Green",
  Country: "Thailand",
  CurrentPrice: "0.00",
  CurrentPriceDateTime: "2024-10-19 04:30:38",
  DateAdded: "2024-07-12 17:12:21",
  DateUpdated: "2024-07-12 17:12:21",
  GalleryImage: "268ceefc-bcf2-4076-87c3-bad79c9dca80_{}.png",
  Image: "8226_17207599023073356.png",
  Images: "268ceefc-bcf2-4076-87c3-bad79c9dca80_{}.png",
  InteriorColor: "Black",
  Mainline: null,
  ModelName: '"Rexy" Porsche 911 GT3 R (992)',
  Notes: "",
  OversizedCard: "1",
  ReleaseAfter: null,
  STH: null,
  Scale: "1:64",
  Series: "Car Culture - Race Day",
  SeriesNum: "1",
  TH: null,
  Tampo: "Detailed taillights, AO Racing Rexy livery and graphics",
  Toy: "HRV72",
  ToyCard: "",
  WheelType: "Black RR10SPM",
  WindowColor: "Smoke Tint",
  Year: "2024",
  ebaySearchOverride: null,
  id: "52672",
  price: "0.00",
  queueId: "110070",
}];

let fetchedCarsSorted = [];

const itsFetching = ref(false);

async function fetchData(){
  await axios.get('/find?query=' + '2024' + '&length=9999')
    .then((response) => {fetchedCars = response.data.data; console.log(fetchedCars)})
    .catch((error) => {console.log(error)});
    
    fetchedCarsSorted = fetchedCars.sort(function(a, b){return a.toy - b.toy})
    console.log(fetchedCarsSorted)

  itsFetching.value = true;
};

function getImage(count){
  let image = imageUrl + fetchedCars[count].Images.replace("{}", "large");
  return image;
}

fetchData();
</script>

<template>
  <main>
    CatsForge
    <table id="table">
      <tbody v-if="itsFetching">
      <tr v-for="item, count in fetchedCars">
        <td>{{ count }}</td>
        <td>{{ cars[count] }}</td>
        <td>{{ fetchedCars[count].Toy }}</td>
        <td>{{ fetchedCars[count].ModelName }}</td>
        <!-- <td>{{imageUrl + fetchedCars[count].Images.replace("{}", "large")}}</td> -->
        <td><img :src="getImage(count)"></td>
      </tr>
    </tbody>
    </table>
  </main>
</template>

<style scoped>
.table{
  border: 1px solid black;
}
</style>
