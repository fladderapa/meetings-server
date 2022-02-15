const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
const PORT = process.env.PORT || 3003;
const website = "https://www.aa.se/aa-moten";

try {
  axios(website).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

try {
  axios(
    website + "?search_term=&days_selection=&types_selection%5B6%5D=6"
  ).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/women", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

try {
  axios(
    website + "?search_term=&days_selection=&types_selection%5B7%5D=7"
  ).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/men", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

try {
  axios(
    website + "?search_term=&days_selection=&types_selection%5B5%5D=5"
  ).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/young", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

try {
  axios(
    website + "?search_term=&days_selection=&types_selection%5B4%5D=4"
  ).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/open", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

try {
  axios(
    website + "?search_term=&days_selection=&types_selection%5B3%5D=3"
  ).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $(".search-meetings-results-item", data).each(function () {
      const meetingHtml = $(this).html();
      const meeting = cheerio.load(meetingHtml);

      const address = meeting(".field-name-field-visiting-address a")
        .text()
        .trim();
      const title = meeting("h3").text().trim();
      const moreInfo = meeting(".field-item p").text().trim();
      const info = meeting(".field-collection-container").text().trim();

      const meetingsTable = meeting(".meetings-table").html();

      content.push({
        title: title,
        address: address,
        info: info,
        moreInfo: moreInfo,
        schedule: meetingsTable,
      });

      app.get("/closed", (req, res) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
