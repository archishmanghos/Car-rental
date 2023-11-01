import { Component } from '@angular/core';

@Component({
  selector: 'app-cars-display',
  templateUrl: './cars-display.component.html',
  styleUrls: ['./cars-display.component.css']
})
export class CarsDisplayComponent {
  showDetails: boolean = false;
  index: number = 0;

  turnDetailsOn(event: any) {
    const buttonId = event.target.id;
    const index_ = parseInt(buttonId.split('-')[1]);
    this.index=index_;
    this.showDetails = true;
  }

  turnDetailsOff() {
    this.showDetails = false;
  }

  cars: any[] = [
    {
      "chassis_no": "1FTEF14N5KNB30636",
      "availaibility": "availaible",
      "model": "1989 Ford F 150",
      "colour": "grey",
      "engine_displacement": "3000",
      "km_driven": "23564",
      "delivery_date": "2011-05-23",
      "car_condition": "Good",
      "trips_taken": "121",
      "price_per_hour": "20",
      "price_per_km": "10",
      "point_id": "3",
      "manager_id": "1",
      "img": "1989-Ford-F150.jpg"
    },
    {
      "chassis_no": "4T1SK12E1N4028452",
      "availaibility": "at service",
      "model": "1992 Toyota CAMRY LE",
      "colour": "red",
      "engine_displacement": "1600",
      "km_driven": "18765",
      "delivery_date": "2015-02-18",
      "car_condition": "Very Good",
      "trips_taken": "182",
      "price_per_hour": "25",
      "price_per_km": "13",
      "point_id": "5",
      "manager_id": "3",
      "img": "1992-Toyota-CAMRY-LE.jpg"
    },
    {
      "chassis_no": "2C3CCACG5CH278240",
      "availaibility": "available",
      "model": "2012 Chrysler 300",
      "colour": "brown",
      "engine_displacement": "2600",
      "km_driven": "42341",
      "delivery_date": "2012-06-12",
      "car_condition": "Average",
      "trips_taken": "32",
      "price_per_hour": "180",
      "price_per_km": "8",
      "point_id": "8",
      "manager_id": "3",
      "img": "2012-Chrysler-300.jpg"
    },
    {
      "chassis_no": "4T4BF1FK4CR236137",
      "availaibility": "not available",
      "model": "2012 Toyota Camry",
      "colour": "blue",
      "engine_displacement": "1600",
      "km_driven": "38128",
      "delivery_date": "2013-08-03",
      "car_condition": "Good",
      "trips_taken": "27",
      "price_per_hour": "210",
      "price_per_km": "12",
      "point_id": "4",
      "manager_id": "3",
      "img": "2012-Toyota-Camry.jpeg"
    },
    {
      "chassis_no": "YS3AK35E4M5002999",
      "availaibility": "available",
      "model": "1991 Saab 900",
      "colour": "red",
      "engine_displacement": "900",
      "km_driven": "32525",
      "delivery_date": "2013-08-03",
      "car_condition": "Average",
      "trips_taken": "34",
      "price_per_hour": "175",
      "price_per_km": "7",
      "point_id": "6",
      "manager_id": "2",
      "img": "1991-Saab-900.jpg"
    },
    {
      "chassis_no": "1GNEK13T7YJ204464",
      "availaibility": "at service",
      "model": "2000 Chevrolet Tahoe",
      "colour": "green",
      "engine_displacement": "3000",
      "km_driven": "65767",
      "delivery_date": "2011-07-17",
      "car_condition": "Good",
      "trips_taken": "27",
      "price_per_hour": "190",
      "price_per_km": "10",
      "point_id": "7",
      "manager_id": "2",
      "img": "2000-Chevrolet-Tahoe.jpeg"
    },
    {
      "chassis_no": "5FNRL18613B046732",
      "availaibility": "available",
      "model": "2003 Honda Odyssey",
      "colour": "red",
      "engine_displacement": "1400",
      "km_driven": "13269",
      "delivery_date": "2018-01-23",
      "car_condition": "Very Good",
      "trips_taken": "9",
      "price_per_hour": "250",
      "price_per_km": "15",
      "point_id": "4",
      "manager_id": "3",
      "img": "2003-Honda-Odyssey.jpg"
    },
    {
      "chassis_no": "1B7HF13ZX1J572139",
      "availaibility": "available",
      "model": "2001 Dodge Ram Pickup 1500",
      "colour": "white",
      "engine_displacement": "1500",
      "km_driven": "83457",
      "delivery_date": "2013-05-01",
      "car_condition": "Good",
      "trips_taken": "30",
      "price_per_hour": "210",
      "price_per_km": "12",
      "point_id": "2",
      "manager_id": "2",
      "img": "2001-Dodge-Ram-Pickup-1500.jpeg"
    },
    {
      "chassis_no": "5NPDH4AE6BH023266",
      "availaibility": "not available",
      "model": "2011 Hyundai Elantra",
      "colour": "black",
      "engine_displacement": "1600",
      "km_driven": "12000",
      "delivery_date": "2017-08-14",
      "car_condition": "Very Good",
      "trips_taken": "14",
      "price_per_hour": "270",
      "price_per_km": "16",
      "point_id": "1",
      "manager_id": "2",
      "img": "2011-Hyundai-Elantra.jpeg"
    },
    {
      "chassis_no": "WP0AA29966S716557",
      "availaibility": "not available",
      "model": "2006 Porsche 911",
      "colour": "yellow",
      "engine_displacement": "3000",
      "km_driven": "6727",
      "delivery_date": "2009-09-21",
      "car_condition": "Very Good",
      "trips_taken": "8",
      "price_per_hour": "350",
      "price_per_km": "27",
      "point_id": "3",
      "manager_id": "1",
      "img": "2006-Porsche-911.jpg"
    },
    {
      "chassis_no": "SCFEFBBC5AGD13386",
      "availaibility": "available",
      "model": "2010 Aston Martin V8 Vantage",
      "colour": "green",
      "engine_displacement": "5000",
      "km_driven": "12364",
      "delivery_date": "2013-06-12",
      "car_condition": "Very Good",
      "trips_taken": "6",
      "price_per_hour": "400",
      "price_per_km": "35",
      "point_id": "8",
      "manager_id": "3",
      "img": "2010-Aston-Martin-V8-Vantage.jpg"
    },
    {
      "chassis_no": "WAUKEAFM8DA033285",
      "availaibility": "at service",
      "model": "2013 Audi A3",
      "colour": "grey",
      "engine_displacement": "2000",
      "km_driven": "15677",
      "delivery_date": "2017-11-09",
      "car_condition": "Good",
      "trips_taken": "13",
      "price_per_hour": "290",
      "price_per_km": "22",
      "point_id": "5",
      "manager_id": "3",
      "img": "2013-Audi-A3.jpg"
    },
    {
      "chassis_no": "1J4GZ58S7VC697710",
      "availaibility": "not available",
      "model": "1997 Jeep Grand Cherokee",
      "colour": "black",
      "engine_displacement": "6200",
      "km_driven": "73453",
      "delivery_date": "2017-04-01",
      "car_condition": "Average",
      "trips_taken": "33",
      "price_per_hour": "220",
      "price_per_km": "17",
      "point_id": "6",
      "manager_id": "2",
      "img": "1997-Jeep-Grand-Cherokee.JPG"
    }
  ]
}
