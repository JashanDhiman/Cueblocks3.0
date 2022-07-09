import * as React from "react";
import Layout from "../components/Layout";
import serviceImg from "../images/service_img.png";
import arrow from "../images/Arrow 2.png";
import videoPoster from "../images/videoSectionImg.png";
import "../styles/HomePage.css";
import ImageSliderAsNav from "../components/Slickslider";

// styles

// data
//const links = [
//  {
//    text: "Tutorial",
//    url: "https://www.gatsbyjs.com/docs/tutorial/",
//    description:
//      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//    color: "#E95800",
//  },
//  {
//    text: "How to Guides",
//    url: "https://www.gatsbyjs.com/docs/how-to/",
//    description:
//      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//    color: "#1099A8",
//  },
//  {
//    text: "Reference Guides",
//    url: "https://www.gatsbyjs.com/docs/reference/",
//    description:
//      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//    color: "#BC027F",
//  },
//  {
//    text: "Conceptual Guides",
//    url: "https://www.gatsbyjs.com/docs/conceptual/",
//    description:
//      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//    color: "#0D96F2",
//  },
//  {
//    text: "Plugin Library",
//    url: "https://www.gatsbyjs.com/plugins",
//    description:
//      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//    color: "#8EB814",
//  },
//  {
//    text: "Build and Host",
//    url: "https://www.gatsbyjs.com/cloud",
//    badge: true,
//    description:
//      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//    color: "#663399",
//  },
//];

// markup
const IndexPage = () => {
  return (
    <>
      <Layout showHeader={true} showFooter={true}>
        {/*<ImageSliderAsNav />*/}
        <section className="hero_section">
          <div className="container">
            <div className="hero_sec_flex">
              <div className="hero_section_text">
                <h1>
                  <span>
                    <strong>CueBlocks</strong> is<br></br>
                  </span>
                  <span>
                    an <strong> eCommerce </strong>agency <br></br>
                  </span>
                  <span>
                    for <strong>nutrition brands </strong>
                  </span>
                </h1>
                <p>
                  committed to <strong>going beyond</strong>
                </p>
              </div>
            </div>
            <div className="hero_section_bottom container">
              <div className="ecommerce_button">
                <a href="#abc">
                  <span> Lets Talk</span>
                  <br></br>
                  <span>
                    eCommerce <img src={arrow} alt="arrow" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="scrollDownIcon">
            <svg
              width="8"
              height="37"
              viewBox="0 0 8 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 36.3536C3.84171 36.5488 4.15829 36.5488 4.35355 36.3536L7.53554 33.1716C7.7308 32.9763 7.7308 32.6597 7.53554 32.4645C7.34027 32.2692 7.02369 32.2692 6.82843 32.4645L4 35.2929L1.17157 32.4645C0.976312 32.2692 0.65973 32.2692 0.464468 32.4645C0.269205 32.6597 0.269205 32.9763 0.464468 33.1716L3.64645 36.3536ZM3.5 2.18557e-08L3.5 36L4.5 36L4.5 -2.18557e-08L3.5 2.18557e-08Z"
                fill="black"
              />
            </svg>
            <svg
              className="rotate"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.39055 37.4481C3.50799 36.8138 3.72031 36.2773 4.02751 35.8386C4.33471 35.3998 4.73456 35.0511 5.22707 34.7925L6.01714 35.7806C5.59719 36.0017 5.27068 36.2692 5.0376 36.5832C4.79879 36.8889 4.63763 37.2672 4.55411 37.7182C4.4993 38.0142 4.49239 38.268 4.53337 38.4797C4.57566 38.6843 4.65174 38.8442 4.76162 38.9593C4.87281 39.0673 5.00593 39.1357 5.16096 39.1644C5.35124 39.1997 5.52702 39.1557 5.68832 39.0325C5.84257 38.908 5.99526 38.6739 6.14637 38.3301L6.68311 37.0847C6.96603 36.4228 7.28993 35.9726 7.65481 35.734C8.01395 35.4871 8.43664 35.4087 8.9229 35.4987C9.38096 35.5835 9.75341 35.7764 10.0403 36.0773C10.3201 36.377 10.5083 36.758 10.6048 37.2205C10.6944 37.6817 10.6876 38.1907 10.5845 38.7474C10.4944 39.2336 10.3552 39.6707 10.1668 40.0586C9.97259 40.4381 9.74395 40.7674 9.48086 41.0467C9.21778 41.326 8.93276 41.5466 8.62582 41.7084L7.79543 40.7018C8.05095 40.5815 8.28898 40.4179 8.50953 40.2109C8.73007 40.0039 8.92126 39.7587 9.08307 39.4752C9.23915 39.1834 9.34851 38.8684 9.41114 38.5301C9.46465 38.2412 9.47795 37.9922 9.45107 37.7831C9.41844 37.5657 9.35136 37.3966 9.24983 37.2757C9.14255 37.1465 9.00083 37.0656 8.82465 37.033C8.64142 36.9991 8.47464 37.0338 8.3243 37.1372C8.16823 37.2322 8.02428 37.4388 7.89248 37.7569L7.31307 39.1147C7.13872 39.5051 6.94663 39.834 6.73679 40.1013C6.5212 40.3602 6.27573 40.5443 6.00037 40.6537C5.71927 40.7547 5.40607 40.7732 5.06076 40.7093C4.64498 40.6323 4.29236 40.4504 4.0029 40.1636C3.71344 39.8767 3.51273 39.5043 3.40075 39.0462C3.28303 38.5798 3.27963 38.0471 3.39055 37.4481Z"
                fill="black"
              />
              <path
                d="M13.3664 25.4113C13.7146 25.7394 13.9602 26.1041 14.103 26.5052C14.2459 26.9063 14.2941 27.32 14.2478 27.7461C14.2015 28.1722 14.0702 28.5997 13.8539 29.0284C13.5377 29.6555 13.1322 30.1333 12.6375 30.4617C12.146 30.7838 11.5941 30.9469 10.9819 30.9512C10.3729 30.9491 9.72929 30.777 9.05097 30.435C8.37265 30.0929 7.85164 29.6776 7.48794 29.1892C7.12746 28.6943 6.9306 28.1536 6.89736 27.5669C6.86735 26.9739 7.00725 26.3702 7.31707 25.7559C7.53652 25.3207 7.79578 24.9578 8.09486 24.6672C8.38755 24.3733 8.71999 24.1677 9.09219 24.0504C9.46122 23.9235 9.85716 23.8944 10.28 23.9632L10.1836 25.4196C9.74483 25.3347 9.38895 25.364 9.11602 25.5072C8.83669 25.6473 8.60827 25.8933 8.43078 26.2453C8.25651 26.5908 8.18641 26.9368 8.22047 27.283C8.25776 27.6229 8.40409 27.9455 8.65945 28.2509C8.90841 28.553 9.26966 28.8235 9.74321 29.0623C10.2103 29.2979 10.6394 29.434 11.0303 29.4706C11.4244 29.5008 11.7692 29.4299 12.0647 29.2578C12.3601 29.0858 12.6015 28.8142 12.7886 28.443C12.9629 28.0974 13.0202 27.7531 12.9605 27.4099C12.904 27.0604 12.7128 26.7392 12.3869 26.4464L13.3664 25.4113Z"
                fill="black"
              />
              <path
                d="M13.7129 16.8479C14.2492 16.2506 14.8146 15.9107 15.409 15.828C16.0034 15.7453 16.5433 15.9218 17.0285 16.3576C17.5457 16.8221 17.7898 17.3495 17.7606 17.9398C17.7261 18.5252 17.443 19.1139 16.9115 19.7058L16.8749 19.8753L15.855 21.0111L17.8786 22.8283L16.9017 23.9161L11.6227 19.1754L13.7129 16.8479ZM16.0135 19.1451C16.2913 18.8358 16.4359 18.5514 16.4473 18.292C16.4582 18.0224 16.333 17.7703 16.0717 17.5357C15.8104 17.301 15.549 17.206 15.2875 17.2505C15.0255 17.2848 14.7556 17.4567 14.4778 17.7659L13.4794 18.8777L15.0151 20.2569L16.0135 19.1451ZM16.8273 18.7055L20.996 19.357L19.8826 20.5967L16.2997 19.9366L16.8273 18.7055Z"
                fill="black"
              />
              <path
                d="M23.0797 8.72689C23.7136 8.42433 24.3234 8.29604 24.9092 8.34202C25.495 8.388 26.0281 8.59811 26.5085 8.97234C26.9954 9.34349 27.4025 9.87187 27.7297 10.5575C28.057 11.243 28.2118 11.8918 28.1942 12.5038C28.1831 13.1127 28.0112 13.6593 27.6786 14.1437C27.3459 14.6281 26.8627 15.0215 26.2288 15.3241C25.595 15.6267 24.9819 15.7565 24.3897 15.7136C23.8039 15.6676 23.2675 15.4591 22.7806 15.0879C22.3002 14.7137 21.8964 14.1838 21.5691 13.4982C21.2419 12.8126 21.0838 12.1653 21.0949 11.5565C21.1126 10.9445 21.2877 10.3963 21.6203 9.91194C21.9594 9.42447 22.4459 9.02945 23.0797 8.72689ZM23.603 9.82319C23.2473 9.99299 22.9802 10.2237 22.8018 10.5154C22.6298 10.804 22.5546 11.1456 22.5763 11.5403C22.6044 11.9319 22.7311 12.3638 22.9565 12.8359C23.1819 13.3081 23.4379 13.6782 23.7248 13.9463C24.018 14.2113 24.3309 14.3677 24.6635 14.4155C25.0024 14.4602 25.3498 14.3976 25.7055 14.2278C26.0613 14.058 26.3251 13.8288 26.4971 13.5402C26.6691 13.2517 26.741 12.9116 26.7129 12.52C26.6913 12.1253 26.5678 11.6918 26.3424 11.2197C26.117 10.7475 25.8577 10.379 25.5644 10.1139C25.2776 9.84581 24.9679 9.68788 24.6354 9.64012C24.3029 9.59236 23.9588 9.65339 23.603 9.82319Z"
                fill="black"
              />
              <path
                d="M31.6804 5.00474L32.9644 10.9414C33.0174 11.1866 33.0965 11.3492 33.2018 11.429C33.3071 11.5089 33.4578 11.5277 33.6539 11.4852C33.773 11.4595 33.8695 11.4313 33.9436 11.4006C34.0161 11.3629 34.1081 11.3137 34.2196 11.2529L34.298 12.2259C34.1941 12.3217 34.0549 12.4068 33.8803 12.4812C33.7143 12.5611 33.5437 12.62 33.3686 12.6579C32.8572 12.7684 32.4559 12.7269 32.1647 12.5333C31.879 12.3311 31.6771 11.9568 31.5589 11.4104L30.2409 5.31607L31.6804 5.00474Z"
                fill="black"
              />
              <path
                d="M38.9508 2.40531L39.4372 8.45976C39.4573 8.7098 39.5142 8.88138 39.608 8.97451C39.7018 9.06764 39.8487 9.10617 40.0487 9.09009C40.1701 9.08034 40.2696 9.06516 40.347 9.04456C40.4239 9.01681 40.5216 8.9802 40.6402 8.93472L40.5891 9.90948C40.4734 9.99068 40.3241 10.0566 40.1412 10.1072C39.966 10.1645 39.7892 10.2002 39.6106 10.2146C39.0891 10.2565 38.6968 10.1622 38.4338 9.93165C38.1774 9.69341 38.0268 9.29568 37.9821 8.73845L37.4827 2.52326L38.9508 2.40531Z"
                fill="black"
              />
              <path
                d="M53.3548 5.27862C54.4324 5.54836 55.1918 6.05614 55.6331 6.80197C56.0762 7.54085 56.1593 8.46301 55.8827 9.56844C55.6077 10.6669 55.0999 11.4412 54.3593 11.8912C53.6187 12.3411 52.7095 12.4313 51.6319 12.1615L48.9726 11.4959L50.6955 4.61298L53.3548 5.27862ZM51.8461 10.9961C52.4996 11.1597 53.0385 11.0877 53.4627 10.7802C53.8956 10.4674 54.2051 9.93907 54.3914 9.19516C54.5776 8.45125 54.5525 7.84286 54.3163 7.36999C54.0887 6.89191 53.6481 6.57108 52.9946 6.4075L51.8475 6.12036L50.6989 10.709L51.8461 10.9961Z"
                fill="black"
              />
              <path
                d="M64.3363 9.76621C64.9448 10.1169 65.3962 10.5466 65.6903 11.0553C65.9845 11.5639 66.1135 12.1222 66.0775 12.7301C66.0477 13.3416 65.8432 13.9765 65.4639 14.6347C65.0845 15.2929 64.6378 15.7882 64.1237 16.1206C63.6157 16.4565 63.068 16.6247 62.4804 16.6252C61.8928 16.6258 61.2947 16.4507 60.6861 16.1C60.0776 15.7493 59.6232 15.3178 59.3228 14.8056C59.0286 14.2969 58.8964 13.7368 58.9262 13.1253C58.9622 12.5174 59.1699 11.8843 59.5492 11.2261C59.9286 10.5679 60.3722 10.0708 60.8801 9.73489C61.3943 9.40252 61.9451 9.23608 62.5327 9.23557C63.1266 9.23863 63.7277 9.41551 64.3363 9.76621ZM63.7297 10.8187C63.3882 10.6219 63.0467 10.5327 62.7053 10.551C62.3701 10.5728 62.046 10.7046 61.7331 10.9461C61.4264 11.1912 61.1424 11.5404 60.8812 11.9937C60.62 12.447 60.4602 12.8678 60.4019 13.2561C60.3498 13.6479 60.3983 13.9943 60.5474 14.2953C60.7028 14.5999 60.9512 14.8506 61.2927 15.0475C61.6342 15.2443 61.9726 15.3317 62.3078 15.3099C62.643 15.288 62.964 15.1545 63.2707 14.9093C63.5836 14.6678 63.8707 14.3204 64.1319 13.8671C64.3931 13.4138 64.5498 12.9912 64.6019 12.5994C64.6602 12.2111 64.6148 11.8665 64.4657 11.5655C64.3166 11.2645 64.0712 11.0156 63.7297 10.8187Z"
                fill="black"
              />
              <path
                d="M73.661 19.5043L74.7395 20.6446L69.6524 23.0885L68.4852 21.8544L70.3356 18.4915L66.9044 20.183L65.7373 18.9489L68.4606 14.0058L69.5391 15.1461L67.2864 18.7563L71.0977 16.7941L72.1024 17.8563L69.9383 21.5603L73.661 19.5043Z"
                fill="black"
              />
              <path
                d="M71.4495 26.4877L76.2332 24.0364L76.8362 25.2132L75.4404 26.0251L75.5101 25.784C75.8618 25.7004 76.1791 25.6909 76.4618 25.7554C76.7509 25.8166 77.0069 25.9391 77.2299 26.1228C77.4561 26.3129 77.6428 26.5514 77.7899 26.8384C77.9598 27.1701 78.0464 27.4962 78.0496 27.8167C78.056 28.1436 77.9661 28.4474 77.7797 28.7281C77.603 29.0119 77.3202 29.2535 76.9311 29.4529L73.793 31.0609L73.1213 29.7502L75.8863 28.3333C76.2945 28.1241 76.5343 27.9006 76.6057 27.6627C76.6834 27.4215 76.6569 27.1734 76.5262 26.9183C76.4347 26.7397 76.3001 26.5871 76.1226 26.4607C75.9547 26.3374 75.7473 26.2705 75.5004 26.2601C75.2567 26.2561 74.9755 26.3358 74.6565 26.4992L72.1212 27.7985L71.4495 26.4877Z"
                fill="black"
              />
              <path
                d="M81.1054 38.9938C81.0127 39.6321 80.8214 40.1765 80.5314 40.6268C80.2415 41.0772 79.8555 41.4412 79.3734 41.7188L78.5456 40.762C78.9566 40.5248 79.2725 40.2448 79.4932 39.922C79.7199 39.6073 79.8663 39.223 79.9322 38.7691C79.9755 38.4712 79.9725 38.2173 79.9234 38.0074C79.8732 37.8046 79.7909 37.6478 79.6767 37.537C79.5614 37.4334 79.4257 37.3702 79.2697 37.3475C79.0782 37.3197 78.9042 37.3705 78.7478 37.4999C78.5985 37.6303 78.455 37.8701 78.3174 38.2195L77.8294 39.4848C77.5724 40.1572 77.2663 40.6197 76.9109 40.8722C76.5617 41.1329 76.1423 41.2277 75.6529 41.1566C75.1919 41.0897 74.8123 40.9114 74.5139 40.6218C74.2227 40.3333 74.0199 39.9598 73.9054 39.5014C73.798 39.0441 73.785 38.5352 73.8664 37.9749C73.9375 37.4855 74.0597 37.0434 74.2329 36.6485C74.4122 36.2618 74.6279 35.9237 74.8799 35.6345C75.1319 35.3452 75.4082 35.1137 75.7086 34.9401L76.5775 35.9136C76.3268 36.0438 76.0953 36.2166 75.883 36.4319C75.6706 36.6473 75.4891 36.8998 75.3384 37.1893C75.1938 37.487 75.0968 37.806 75.0473 38.1464C75.0051 38.4372 75.0015 38.6866 75.0364 38.8944C75.0775 39.1104 75.1511 39.2768 75.2572 39.3936C75.3694 39.5186 75.5142 39.5939 75.6915 39.6196C75.8759 39.6464 76.0412 39.6053 76.1874 39.4961C76.3397 39.3951 76.4755 39.1831 76.5949 38.8601L77.1211 37.4808C77.2801 37.0839 77.4593 36.7478 77.6586 36.4726C77.864 36.2055 78.1021 36.012 78.373 35.892C78.65 35.7801 78.9622 35.7495 79.3098 35.7999C79.7282 35.8607 80.0877 36.0288 80.388 36.3042C80.6884 36.5796 80.9034 36.9439 81.0331 37.3973C81.1689 37.8588 81.193 38.391 81.1054 38.9938Z"
                fill="black"
              />
              <path
                d="M71.6028 51.409C71.2421 51.0947 70.9826 50.7399 70.8243 50.3446C70.6659 49.9493 70.6016 49.5378 70.6314 49.1102C70.6611 48.6826 70.7757 48.2504 70.9751 47.8136C71.2668 47.1747 71.6534 46.6815 72.135 46.3341C72.6136 45.9932 73.1587 45.8087 73.7703 45.7807C74.3789 45.7591 75.0288 45.9061 75.7198 46.2215C76.4109 46.537 76.9477 46.9317 77.3301 47.4057C77.7095 47.8861 77.9272 48.4188 77.9832 49.0038C78.0363 49.5952 77.9199 50.2039 77.6342 50.8298C77.4318 51.2731 77.1868 51.6458 76.8993 51.9478C76.6182 52.2529 76.294 52.4712 75.9267 52.6029C75.5628 52.744 75.1683 52.7885 74.7431 52.7362L74.7828 51.2771C75.2246 51.3449 75.5791 51.3019 75.8463 51.1481C76.1199 50.9973 76.3386 50.7426 76.5023 50.384C76.663 50.0319 76.7196 49.6835 76.6722 49.3388C76.6217 49.0007 76.4629 48.684 76.1959 48.3888C75.9354 48.0965 75.5639 47.8403 75.0815 47.62C74.6055 47.4028 74.1715 47.2834 73.7795 47.262C73.3845 47.2472 73.0427 47.3314 72.7541 47.5149C72.4656 47.6983 72.235 47.979 72.0624 48.3572C71.9017 48.7092 71.8578 49.0556 71.9308 49.3962C72.0008 49.7433 72.2044 50.0568 72.5414 50.3367L71.6028 51.409Z"
                fill="black"
              />
              <path
                d="M71.5903 59.9795C71.0776 60.5971 70.5259 60.9587 69.9351 61.0644C69.3444 61.1702 68.7981 61.0147 68.2963 60.5981C67.7614 60.1541 67.497 59.6366 67.5033 59.0456C67.515 58.4592 67.775 57.86 68.2831 57.2479L68.3131 57.0771L69.2882 55.9026L67.1955 54.1653L68.1294 53.0404L73.5886 57.5724L71.5903 59.9795ZM69.2022 57.7733C68.9367 58.0932 68.8032 58.3829 68.8019 58.6426C68.8015 58.9124 68.9364 59.1595 69.2066 59.3838C69.4768 59.6081 69.7417 59.6929 70.0013 59.6383C70.2618 59.5938 70.5248 59.4116 70.7903 59.0918L71.7448 57.942L70.1567 56.6236L69.2022 57.7733ZM68.4061 58.2442L64.2153 57.7551L65.2796 56.473L68.8855 56.9935L68.4061 58.2442Z"
                fill="black"
              />
              <path
                d="M62.5449 68.4581C61.9233 68.7851 61.3189 68.937 60.7318 68.9138C60.1446 68.8906 59.6038 68.7013 59.1092 68.346C58.6082 67.9941 58.1809 67.4819 57.8273 66.8096C57.4737 66.1372 57.2938 65.4949 57.2876 64.8827C57.2751 64.2739 57.4256 63.721 57.7392 63.2241C58.0527 62.7271 58.5203 62.3152 59.1419 61.9882C59.7636 61.6613 60.3711 61.5077 60.9646 61.5276C61.5517 61.5508 62.0958 61.7383 62.5967 62.0903C63.0913 62.4456 63.5154 62.9594 63.8691 63.6318C64.2227 64.3041 64.4058 64.9448 64.4183 65.5536C64.4245 66.1658 64.2708 66.7203 63.9572 67.2173C63.6373 67.7176 63.1665 68.1312 62.5449 68.4581ZM61.9794 67.383C62.3283 67.1995 62.5862 66.9586 62.7532 66.6602C62.9138 66.3652 62.9757 66.0209 62.9387 65.6273C62.8954 65.2371 62.752 64.8105 62.5085 64.3474C62.2649 63.8844 61.9946 63.5245 61.6976 63.2677C61.3943 63.0143 61.0755 62.8701 60.7414 62.8353C60.401 62.8039 60.0563 62.8799 59.7074 63.0634C59.3586 63.2469 59.1038 63.4861 58.9432 63.7812C58.7825 64.0762 58.7239 64.4188 58.7672 64.809C58.8041 65.2026 58.9443 65.6309 59.1879 66.0939C59.4314 66.557 59.7049 66.9152 60.0082 67.1687C60.3052 67.4254 60.6208 67.5712 60.9549 67.606C61.2891 67.6408 61.6306 67.5665 61.9794 67.383Z"
                fill="black"
              />
              <path
                d="M54.0955 72.5116L52.5819 66.6292C52.5194 66.3863 52.434 66.227 52.3257 66.1512C52.2174 66.0755 52.0661 66.0626 51.8717 66.1126C51.7537 66.143 51.6583 66.1749 51.5856 66.2084C51.5146 66.2489 51.4246 66.3017 51.3155 66.3667L51.1993 65.3976C51.2995 65.2978 51.4353 65.2074 51.6068 65.1262C51.7696 65.0399 51.9378 64.9745 52.1113 64.9298C52.618 64.7994 53.0206 64.8253 53.3191 65.0076C53.6124 65.1985 53.8287 65.5646 53.968 66.106L55.5218 72.1446L54.0955 72.5116Z"
                fill="black"
              />
              <path
                d="M46.9329 75.3915L46.2117 69.3605C46.1819 69.1114 46.1183 68.9421 46.021 68.8527C45.9237 68.7633 45.7754 68.7305 45.5762 68.7544C45.4552 68.7688 45.3564 68.7879 45.2799 68.8114C45.2041 68.8422 45.1079 68.8825 44.9912 68.9326L45.0044 67.9566C45.1169 67.8709 45.2635 67.7993 45.4442 67.7416C45.617 67.6776 45.7924 67.635 45.9703 67.6137C46.4898 67.5516 46.8854 67.6306 47.1571 67.8507C47.4226 68.0788 47.5885 68.4704 47.6549 69.0255L48.3953 75.2166L46.9329 75.3915Z"
                fill="black"
              />
              <path
                d="M32.4291 73.0798C31.3419 72.8521 30.5632 72.3742 30.0933 71.6461C29.6219 70.925 29.503 70.0067 29.7365 68.8914C29.9686 67.783 30.4459 66.9897 31.1685 66.5112C31.8911 66.0328 32.796 65.9075 33.8833 66.1351L36.5665 66.697L35.1123 73.6416L32.4291 73.0798ZM33.7146 67.308C33.0552 67.1699 32.5196 67.2628 32.1076 67.5866C31.6872 67.9159 31.3984 68.4559 31.2412 69.2064C31.084 69.957 31.1327 70.564 31.3871 71.0273C31.6331 71.4962 32.0858 71.7997 32.7452 71.9378L33.9026 72.1801L34.8721 67.5504L33.7146 67.308Z"
                fill="black"
              />
              <path
                d="M21.2789 69.0222C20.6572 68.6954 20.1895 68.2835 19.8759 67.7867C19.5622 67.2898 19.4115 66.737 19.4239 66.1281C19.4299 65.5159 19.6096 64.8736 19.9631 64.2012C20.3166 63.5287 20.7437 63.0164 21.2446 62.6644C21.7391 62.3089 22.2799 62.1196 22.867 62.0962C23.4542 62.0729 24.0586 62.2246 24.6803 62.5514C25.302 62.8782 25.7729 63.2917 26.0929 63.7919C26.4066 64.2887 26.5604 64.8433 26.5544 65.4555C26.542 66.0643 26.3591 66.705 26.0057 67.3774C25.6522 68.0499 25.2282 68.5638 24.7337 68.9192C24.2328 69.2713 23.6889 69.459 23.1017 69.4824C22.5082 69.5024 21.9006 69.349 21.2789 69.0222ZM21.8442 67.9469C22.1931 68.1303 22.5378 68.2062 22.8782 68.1747C23.2123 68.1398 23.531 67.9956 23.8343 67.7421C24.1313 67.4852 24.4015 67.1252 24.6449 66.6621C24.8883 66.199 25.0316 65.7724 25.0748 65.3821C25.1117 64.9886 25.0497 64.6443 24.889 64.3493C24.722 64.051 24.464 63.8101 24.1151 63.6267C23.7661 63.4433 23.4246 63.369 23.0905 63.4039C22.7564 63.4388 22.4409 63.5847 22.1439 63.8415C21.8406 64.095 21.5673 64.4533 21.3239 64.9164C21.0804 65.3795 20.9403 65.8079 20.9034 66.2014C20.8603 66.5917 20.919 66.9343 21.0797 67.2293C21.2404 67.5243 21.4953 67.7635 21.8442 67.9469Z"
                fill="black"
              />
              <path
                d="M11.5835 59.6536L10.4615 58.556L15.4499 55.9164L16.6641 57.1042L14.9457 60.5365L18.3086 58.713L19.5228 59.9008L16.9936 64.946L15.8716 63.8484L17.9823 60.1534L14.2501 62.2622L13.2049 61.2398L15.2235 57.4545L11.5835 59.6536Z"
                fill="black"
              />
              <path
                d="M13.5237 52.5895L8.83886 55.2248L8.19058 54.0724L9.55387 53.2068L9.49356 53.4504C9.14532 53.5476 8.8287 53.5695 8.5437 53.516C8.25245 53.4661 7.99186 53.3536 7.7619 53.1787C7.52844 52.9976 7.33265 52.7665 7.17453 52.4854C6.99182 52.1605 6.89265 51.8381 6.87703 51.5179C6.8579 51.1916 6.93597 50.8845 7.11126 50.5968C7.27679 50.3063 7.55008 50.0539 7.93111 49.8396L11.0044 48.1108L11.7265 49.3945L9.0186 50.9177C8.61883 51.1425 8.3879 51.3752 8.32583 51.6157C8.25751 51.8597 8.29363 52.1067 8.43418 52.3565C8.53256 52.5314 8.67291 52.6786 8.85524 52.7981C9.0278 52.9148 9.23764 52.9735 9.48477 52.9743C9.72838 52.9689 10.0064 52.8783 10.3187 52.7026L12.8017 51.3059L13.5237 52.5895Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="heroBlurBlu"></div>
          <div className="heroBlurYel"></div>
        </section>
        <section className="videoSection">
          <div className="container">
            <div className="video_image">
              <video width="1240" height="516" poster={videoPoster}>
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="video_play_btn">
                <a href="#abc">
                  <span className="material-symbols-outlined" id="play_btn">
                    play_circle
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="serviceSection">
          <div className="container">
            <div className="service">
              <div className="service_col1">
                <img src={serviceImg} alt="serviceIMg" />
              </div>
              <div className="service_col2">
                <h3>SERVICES</h3>
                <div className="services_development">
                  <span>01</span>
                  <h4>Development</h4>
                  <ul>
                    <li>
                      <a href="#abc">Magento</a>
                    </li>
                    <li>
                      <a href="#abc">Shopify</a>
                    </li>
                    <li>
                      <a href="#abc">PHP deveolpment</a>
                    </li>
                    <li>
                      <a href="#abc">Wordpress/ woocommerce</a>
                    </li>
                  </ul>
                </div>
                <div className="services_marketing">
                  <span>02</span>
                  <h4>Digital Marketing</h4>
                  <ul>
                    <li>
                      <a href="#abc">Email Marketing</a>
                    </li>
                    <li>
                      <a href="#abc">Organic Search (SEO)</a>
                    </li>
                    <li>
                      <a href="#abc">Paid Digital Advertising</a>
                    </li>
                    <li>
                      <a href="#abc">Marketplace Optimisation</a>
                    </li>
                    <li>
                      <a href="#abc">Conversion Rate Optimisation</a>
                    </li>
                  </ul>
                </div>
                <div className="services_design">
                  <span>03</span>
                  <h4>Design</h4>
                  <ul>
                    <li>
                      <a href="#abc">UI/UX</a>
                    </li>
                    <li>
                      <a href="#abc">Branding</a>
                    </li>
                    <li>
                      <a href="#abc">3D renders</a>
                    </li>
                    <li>
                      <a href="#abc">Illustrations</a>
                    </li>
                    <li>
                      <a href="#abc">Amazon Pages</a>
                    </li>
                    <li>
                      <a href="#abc">Ad graphics (tentative)</a>
                    </li>
                  </ul>
                </div>
                <div className="getInTouch">
                  <a href="#abc">
                    <span>Get in</span>
                    <br></br>
                    <span>
                      Touch <img src={arrow} alt="arrow" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="heroBlurBlu"></div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;
