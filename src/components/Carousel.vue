<template>
  <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in images" :key="item">
      <img :src="item.url" alt="Image" class="carousel-image" />
    </el-carousel-item>
  </el-carousel>
  <!-- <img :src="aaa" class="responsive-img" /> -->
  <el-button type="primary" @click="handleClick">Primary</el-button>
</template>

<script>
import { saveAs } from "file-saver";
// import img1 from "@/assets/images/12.jpg";
// import img2 from "@/assets/images/17.jpg";
import axios from "axios";
const blobUrls = [];
var imageNames = [];
export default {
  data() {
    return {
      images: [],
      aaa: "",
    };
  },
  created() {
    this.initialize().then(() => {
      const interval = setInterval(() => {
        if (this.imagesName !== null) {
          this.getFileBlobByName();
          clearInterval(interval);
        }
      }, 100); // Interval of 0.1 seconds (100 milliseconds)
    });
  },
  methods: {
    async initialize() {
      await this.getFileName();
    },
    handleClick() {
      // Your function logic here
      console.log("Button clicked!");
      console.log(imageNames);
    },
    // base64ToBlob(base64Data, contentType) {
    //   contentType = contentType || "";
    //   var sliceSize = 1024;
    //   var byteCharacters = atob(base64Data);
    //   var bytesLength = byteCharacters.length;
    //   var slicesCount = Math.ceil(bytesLength / sliceSize);
    //   var byteArrays = new Array(slicesCount);

    //   for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
    //     var begin = sliceIndex * sliceSize;
    //     var end = Math.min(begin + sliceSize, bytesLength);

    //     var bytes = new Array(end - begin);
    //     for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
    //       bytes[i] = byteCharacters[offset].charCodeAt(0);
    //     }
    //     byteArrays[sliceIndex] = new Uint8Array(bytes);
    //   }
    //   return new Blob(byteArrays, { type: contentType });
    // },
    // blobToFile(blob) {
    //   return new File([blob], "screenshot.png", { type: "image/jpeg" });
    // },
    // get64Data() {
    //   axios
    //     .get("/api/get_image_data")
    //     .then((response) => {
    //       // Handle the response data
    //       console.log(response.data.image_data);
    //       this.images = [
    //         { url: img1 },
    //         { url: img2 },
    //         { url: img1 },
    //         // Add more images if needed
    //       ];
    //       var base64Img = response.data.image_data;
    //       var contentType = "image/png";
    //       var fileImg = this.base64ToBlob(base64Img, contentType);
    //       // console.log("fileDetail:" + fileImg.size + fileImg.type + fileImg.arrayBuffer);

    //       // saveAs(fileImg, "test.png");
    //     })
    //     .catch((error) => {
    //       // Handle the error
    //       console.error(error);
    //     });
    // },
    // base64ImgtoFile(dataurl, filename = "file") {
    //   let arr = dataurl.split(",");
    //   let mime = arr[0].match(/:(.*?);/)[1];
    //   let suffix = mime.split("/")[1];
    //   let bstr = atob(arr[1]);
    //   let n = bstr.length;
    //   let u8arr = new Uint8Array(n);
    //   while (n--) {
    //     u8arr[n] = bstr.charCodeAt(n);
    //   }
    //   return new File([u8arr], `${filename}.${suffix}`, {
    //     type: mime,
    //   });
    // },
    getFileName() {
      axios
        .get("/api/get_file_list")
        .then((response) => {
          // Handle the response data
          imageNames = response.data;
          console.log(imageNames);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    },
    getFileBlob() {
      axios
        .get("/api/get_blob", { responseType: "blob" })
        .then((response) => {
          this.getFileName();
          // Handle the response data
          const blob = new Blob([response.data], { type: "image/png" });
          // saveAs(blob, "test.png");
          const blobUrl = URL.createObjectURL(blob);
          console.log(response);
          blobUrls.push(URL.createObjectURL(blob));
          console.log(blobUrls[0]);
          for (var i = 0; i < 4; i++) {
            this.images.push({ url: blobUrl });
          }
        })
        .catch((error) => {
          // Handle any errors
          console.error("Error:", error);
        });
    },
    getFileBlobByName() {
      for (var i = 0; i < imageNames.length; i++) {
        axios
          .get(`/api/get_blob_byName/${imageNames[i]}`, { responseType: "blob" })
          .then((response) => {
            console.log(response.data);
            const blob = new Blob([response.data], { type: "image/png" });
            const blobUrl = URL.createObjectURL(blob);
            this.images.push({ url: blobUrl });
          })
          .catch((error) => {
            // Handle any errors
            console.error("Error:", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.carousel-image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
.responsive-img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
