import React from "react";
import ReactDom from 'react-dom';

const styleCard = {
    backgroundColor:"#f0f0f0"
}

const reslist = [
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.CollectionMasthead",
                    "collectionId": "92870",
                    "title": "WELCOME50",
                    "imageId": "97fd7fb9638a47fe7ec2f67679afb74e",
                    "aspectRatio": "1",
                    "cta": {
                        "link": "swiggy://collectionV2?collection_id=92870&tags=layout_ux4",
                        "text": "Restaurant collection",
                        "type": "collectionv2"
                    },
                    "type": "COLLECTION_MASTHEAD_TYPE_ONLY_IMAGE",
                    "count": "500 restaurants"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                    "sortConfigs": [
                        {
                            "key": "relevance",
                            "title": "Relevance (Default)",
                            "selected": true,
                            "defaultSelection": true
                        },
                        {
                            "key": "deliveryTimeAsc",
                            "title": "Delivery Time"
                        },
                        {
                            "key": "modelBasedRatingDesc",
                            "title": "Rating"
                        },
                        {
                            "key": "costForTwoAsc",
                            "title": "Cost: Low to High"
                        },
                        {
                            "key": "costForTwoDesc",
                            "title": "Cost: High to Low"
                        }
                    ],
                    "restaurantCount": 500,
                    "facetList": [
                        {
                            "label": "Veg/Non-Veg",
                            "id": "isVeg",
                            "selection": "SELECT_TYPE_MULTISELECT",
                            "facetInfo": [
                                {
                                    "label": "Non Veg",
                                    "id": "isVegfacetquery2",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Pure Veg",
                                    "id": "isVegfacetquery3",
                                    "analytics": {},
                                    "openFilter": true
                                }
                            ],
                            "viewType": "VIEW_TYPE_HALF_CARD",
                            "subLabel": "Filter by",
                            "openFilter": true
                        },
                        {
                            "label": "Ratings",
                            "id": "rating",
                            "selection": "SELECT_TYPE_MULTISELECT",
                            "facetInfo": [
                                {
                                    "label": "Ratings 3.5+",
                                    "id": "ratingfacetquery3",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Ratings 4.0+",
                                    "id": "ratingfacetquery4",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Ratings 4.5+",
                                    "id": "ratingfacetquery5",
                                    "analytics": {},
                                    "openFilter": true
                                }
                            ],
                            "viewType": "VIEW_TYPE_HALF_CARD",
                            "subLabel": "Filter by",
                            "openFilter": true
                        },
                        {
                            "label": "Delivery Time",
                            "id": "deliveryTime",
                            "selection": "SELECT_TYPE_MULTISELECT",
                            "facetInfo": [
                                {
                                    "label": "Less than 30 mins",
                                    "id": "deliveryTimefacetquery2",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Less than 45 mins",
                                    "id": "deliveryTimefacetquery3",
                                    "analytics": {},
                                    "openFilter": true
                                }
                            ],
                            "viewType": "VIEW_TYPE_HALF_CARD",
                            "subLabel": "Filter by",
                            "openFilter": true
                        },
                        {
                            "label": "Cost For Two",
                            "id": "costForTwo",
                            "selection": "SELECT_TYPE_MULTISELECT",
                            "facetInfo": [
                                {
                                    "label": "Less than Rs. 300",
                                    "id": "costForTwofacetquery3",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Rs.300 - Rs.600",
                                    "id": "costForTwofacetquery4",
                                    "analytics": {},
                                    "openFilter": true
                                },
                                {
                                    "label": "Greater than Rs. 600",
                                    "id": "costForTwofacetquery5",
                                    "analytics": {},
                                    "openFilter": true
                                }
                            ],
                            "viewType": "VIEW_TYPE_HALF_CARD",
                            "subLabel": "Filter by",
                            "openFilter": true
                        }
                    ]
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "109787",
                        "name": "Chianti",
                        "cloudinaryImageId": "byb52jmakvfk71lqd0av",
                        "locality": "MG Road",
                        "areaName": "MG Road",
                        "costForTwo": "₹1250 for two",
                        "cuisines": [
                            "Italian",
                            "Pizzas",
                            "Salads",
                            "Pastas",
                            "Desserts"
                        ],
                        "avgRating": 4.4,
                        "feeDetails": {
                            "restaurantId": "109787",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 5200
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 5200
                        },
                        "parentId": "7396",
                        "avgRatingString": "4.4",
                        "totalRatingsString": "1K+",
                        "promoted": true,
                        "adTrackingId": "cid=9658970~p=1~eid=0000018c-7267-34bc-0973-25120003011e~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 34,
                            "lastMileTravel": 4,
                            "serviceability": "SERVICEABLE",
                            "slaString": "34 mins",
                            "lastMileTravelString": "4.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                    "description": "gourmet"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                "description": "gourmet"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=109787",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "10575",
                        "name": "Pizza Hut",
                        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                        "locality": "Shanti Nagar",
                        "areaName": "Shanti Nagar",
                        "costForTwo": "₹600 for two",
                        "cuisines": [
                            "Pizzas"
                        ],
                        "avgRating": 4.1,
                        "feeDetails": {
                            "restaurantId": "10575",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 3300
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 3300
                        },
                        "parentId": "721",
                        "avgRatingString": "4.1",
                        "totalRatingsString": "5K+",
                        "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 2.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "29 mins",
                            "lastMileTravelString": "2.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-17 01:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=10575",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "667962",
                        "name": "Paris Panini - Gourmet Sandwiches & Wraps",
                        "cloudinaryImageId": "33101e2fff3a071cbd8b85e73c0d4f45",
                        "locality": "Church Street",
                        "areaName": "Central Bangalore",
                        "costForTwo": "₹500 for two",
                        "cuisines": [
                            "Continental",
                            "Pastas",
                            "Salads",
                            "Snacks",
                            "Desserts",
                            "Fast Food",
                            "French"
                        ],
                        "avgRating": 4.6,
                        "feeDetails": {
                            "restaurantId": "667962",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "21019",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "1K+",
                        "promoted": true,
                        "adTrackingId": "cid=9953791~p=2~eid=0000018c-7267-34bc-0973-251300030277~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 1.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "29 mins",
                            "lastMileTravelString": "1.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:30:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                    "description": "gourmet"
                                }
                            ],
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                "description": "gourmet"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "40% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=667962",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "426730",
                        "name": "Theobroma",
                        "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
                        "locality": "Vittal Malya Road",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Desserts",
                            "Bakery",
                            "Beverages"
                        ],
                        "avgRating": 4.6,
                        "feeDetails": {
                            "restaurantId": "426730",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "1040",
                        "avgRatingString": "4.6",
                        "totalRatingsString": "1K+",
                        "sla": {
                            "deliveryTime": 17,
                            "lastMileTravel": 0.3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "17 mins",
                            "lastMileTravelString": "0.3 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:00:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                    "description": "gourmet"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                "description": "gourmet"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "10% OFF",
                            "subHeader": "ABOVE ₹159",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=426730",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "336364",
                        "name": "Third Wave Coffee",
                        "cloudinaryImageId": "d96267738c19ec62acb5390e52faba41",
                        "locality": "Church Street",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Beverages",
                            "Bakery",
                            "Continental"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": {
                            "restaurantId": "336364",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "274773",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "500+",
                        "promoted": true,
                        "adTrackingId": "cid=9948916~p=3~eid=0000018c-7267-34bc-0973-25140003032b~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 27,
                            "lastMileTravel": 1.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "27 mins",
                            "lastMileTravelString": "1.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-17 01:00:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "description": "",
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=336364",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "5938",
                        "name": "Burger King",
                        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                        "locality": "Tasker Town",
                        "areaName": "Shivaji Nagar",
                        "costForTwo": "₹350 for two",
                        "cuisines": [
                            "Burgers",
                            "American"
                        ],
                        "avgRating": 4.2,
                        "feeDetails": {
                            "restaurantId": "5938",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 3300
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 3300
                        },
                        "parentId": "166",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "sla": {
                            "deliveryTime": 31,
                            "lastMileTravel": 2.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "31 mins",
                            "lastMileTravelString": "2.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-17 02:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textExtendedBadges": {},
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹120"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=5938",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "342643",
                        "name": "The Pizza Bakery",
                        "cloudinaryImageId": "0335dd45be555d0a4187255e57d2ca88",
                        "locality": "Church Street",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹700 for two",
                        "cuisines": [
                            "Pizzas",
                            "Pastas",
                            "Italian",
                            "Desserts",
                            "Continental"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": {
                            "restaurantId": "342643",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "11108",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "1K+",
                        "promoted": true,
                        "adTrackingId": "cid=9953873~p=4~eid=0000018c-7267-34bc-0973-251500030452~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 30,
                            "lastMileTravel": 1.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30 mins",
                            "lastMileTravelString": "1.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:30:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                    "description": "gourmet"
                                }
                            ],
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                "description": "gourmet"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "description": "",
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C"
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "40% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=342643",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "124178",
                        "name": "Starbucks Coffee",
                        "cloudinaryImageId": "0c958153eeb436db6d515ca36e47e8a4",
                        "locality": "Ashok Nagar",
                        "areaName": "Lavelle Road",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Beverages",
                            "Cafe",
                            "Snacks",
                            "Desserts",
                            "Bakery",
                            "Ice Cream"
                        ],
                        "avgRating": 4.3,
                        "feeDetails": {
                            "restaurantId": "124178",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "195515",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "1K+",
                        "sla": {
                            "deliveryTime": 19,
                            "lastMileTravel": 0.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "19 mins",
                            "lastMileTravelString": "0.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:59:00",
                            "opened": true
                        },
                        "badges": {
                            "textExtendedBadges": [
                                {
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available",
                                    "fontColor": "#7E808C"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textExtendedBadges": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "shortDescription": "options available",
                                                "fontColor": "#7E808C",
                                                "iconId": "guiltfree/GF_Logo_android_3x",
                                                "description": ""
                                            }
                                        }
                                    ]
                                },
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=124178",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "41095",
                        "name": "Nandhini Deluxe",
                        "cloudinaryImageId": "ylmpwj2vbvfqsiyspfd7",
                        "locality": "Gandhi Nagar",
                        "areaName": "Gandhi Nagar",
                        "costForTwo": "₹550 for two",
                        "cuisines": [
                            "Andhra",
                            "Biryani",
                            "Chinese",
                            "North Indian",
                            "South Indian"
                        ],
                        "avgRating": 4.3,
                        "feeDetails": {
                            "restaurantId": "41095",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4600
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4600
                        },
                        "parentId": "2451",
                        "avgRatingString": "4.3",
                        "totalRatingsString": "5K+",
                        "promoted": true,
                        "adTrackingId": "cid=9947446~p=6~eid=0000018c-7267-34bc-0973-251700030619~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 30,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:59:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "imageBased": {},
                                "textExtendedBadges": {},
                                "textBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=41095",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "570511",
                        "name": "Bakingo",
                        "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
                        "locality": "MV Jayanthi Road",
                        "areaName": "Vasanth Nagar",
                        "costForTwo": "₹299 for two",
                        "cuisines": [
                            "Bakery",
                            "Desserts",
                            "Beverages",
                            "Snacks"
                        ],
                        "avgRating": 4.5,
                        "feeDetails": {
                            "restaurantId": "570511",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4600
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4600
                        },
                        "parentId": "3818",
                        "avgRatingString": "4.5",
                        "totalRatingsString": "1K+",
                        "sla": {
                            "deliveryTime": 27,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "27 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-17 01:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textExtendedBadges": {},
                                "textBased": {},
                                "imageBased": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹299",
                            "discountTag": "FLAT DEAL"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=570511",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "53503",
                        "name": "Brik Oven - Original Sourdough Pizzas",
                        "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
                        "locality": "Church Street",
                        "areaName": "Church Street",
                        "costForTwo": "₹700 for two",
                        "cuisines": [
                            "Italian",
                            "Pizzas",
                            "Desserts",
                            "Beverages"
                        ],
                        "avgRating": 4.2,
                        "feeDetails": {
                            "restaurantId": "53503",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 4000
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 4000
                        },
                        "parentId": "7389",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "10K+",
                        "promoted": true,
                        "adTrackingId": "cid=9658756~p=7~eid=0000018c-7267-34bc-0973-25180003073c~srvts=1702726415548~92870",
                        "sla": {
                            "deliveryTime": 32,
                            "lastMileTravel": 1.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "32 mins",
                            "lastMileTravelString": "1.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-16 23:30:00",
                            "opened": true
                        },
                        "badges": {
                            "imageBadges": [
                                {
                                    "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                    "description": "gourmet"
                                }
                            ]
                        },
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {
                                    "badgeObject": [
                                        {
                                            "attributes": {
                                                "imageId": "v1669879258/GFF_logo_new_xbycg6.png",
                                                "description": "gourmet"
                                            }
                                        }
                                    ]
                                },
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=53503",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        },
        {
            "card": {
                "card": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                    "info": {
                        "id": "588619",
                        "name": "KFC",
                        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                        "locality": "Brigade Rd",
                        "areaName": "Ashok Nagar",
                        "costForTwo": "₹400 for two",
                        "cuisines": [
                            "Burgers",
                            "Biryani",
                            "American",
                            "Snacks",
                            "Fast Food"
                        ],
                        "avgRating": 4.2,
                        "feeDetails": {
                            "restaurantId": "588619",
                            "fees": [
                                {
                                    "name": "BASE_DISTANCE",
                                    "fee": 3800
                                },
                                {
                                    "name": "BASE_TIME"
                                },
                                {
                                    "name": "ANCILLARY_SURGE_FEE"
                                }
                            ],
                            "totalFee": 3800
                        },
                        "parentId": "547",
                        "avgRatingString": "4.2",
                        "totalRatingsString": "1K+",
                        "sla": {
                            "deliveryTime": 27,
                            "lastMileTravel": 2.4,
                            "serviceability": "SERVICEABLE",
                            "slaString": "27 mins",
                            "lastMileTravelString": "2.4 km",
                            "iconType": "ICON_TYPE_EMPTY"
                        },
                        "availability": {
                            "nextCloseTime": "2023-12-17 01:00:00",
                            "opened": true
                        },
                        "badges": {},
                        "isOpen": true,
                        "type": "F",
                        "badgesV2": {
                            "entityBadges": {
                                "textBased": {},
                                "imageBased": {},
                                "textExtendedBadges": {}
                            }
                        },
                        "aggregatedDiscountInfoV3": {
                            "header": "40% OFF",
                            "subHeader": "UPTO ₹80"
                        },
                        "orderabilityCommunication": {
                            "title": {},
                            "subTitle": {},
                            "message": {},
                            "customIcon": {}
                        },
                        "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                "lottie": {},
                                "video": {}
                            }
                        },
                        "reviewsSummary": {},
                        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                        "restaurantOfferPresentationInfo": {}
                    },
                    "analytics": {},
                    "cta": {
                        "link": "swiggy://menu?restaurant_id=588619",
                        "text": "RESTAURANT_MENU",
                        "type": "DEEPLINK"
                    },
                    "widgetId": "collectionV5RestaurantListWidget"
                }
            }
        }
    ]


const RestaurantCard = (props) => {
    const {resData} = props;
    const { info} =resData.card?.card;
    // console.log(info)
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo" 
                alt="img not found" 
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
                    info?.cloudinaryImageId} />
            <h3>{info?.name}</h3>
            <h4>{info?.cuisines.join(",")}</h4>
            <h4>{info?.avgRatingString}</h4>
            <h4>40mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {/* not using keys not acceptable << index as key <<<<< unique id(best practice) */}
                {
                    reslist.map((data)=>(
                        <RestaurantCard 
                        key={data.card?.card?.info?.id}
                        resData={data} />
                    ))
                }
            </div>
        </div>
    )
}

const Header = () => {
    return(
        <div>
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fHw%3D"
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
            <Body />
        </div>
    )
}

const AppLoyout = () =>{
    return (
        <div className="app">
            <Header />
        </div>
    )
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLoyout/>)