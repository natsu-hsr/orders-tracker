import { TOrdersDetails } from "@/store/slices/orders";

export const ordersDetailsMocks: TOrdersDetails = [
  {
    "orderId": "ORD-2024-001",
    "isReturn": false,
    "cdekNumber": "CDEK-9651",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-495",
    "deliveryPoint": "DP-592",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 4943.23,
      "vat_sum": 256.73
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79383736106"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-928",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 2, дом 1",
      "postalCode": "108438"
    },
    "toLocation": {
      "code": "LOC-265",
      "city": "Москва",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 14, дом 40",
      "postalCode": "165330"
    },
    "packages": [
      {
        "barcode": "PKG-85224",
        "weight": 14.29,
        "length": 89,
        "width": 22,
        "height": 44,
        "items": [
          {
            "name": "Книга",
            "amount": 4,
            "cost": 5376.85
          },
          {
            "name": "Книга",
            "amount": 5,
            "cost": 10480.34
          }
        ]
      },
      {
        "barcode": "PKG-46023",
        "weight": 14.34,
        "length": 13,
        "width": 57,
        "height": 14,
        "items": [
          {
            "name": "Книга",
            "amount": 4,
            "cost": 39244.49
          },
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 46298.38
          },
          {
            "name": "Телефон",
            "amount": 2,
            "cost": 14522.47
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-002",
    "isReturn": true,
    "cdekNumber": "CDEK-5941",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-621",
    "deliveryPoint": "DP-482",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 4673.23,
      "vat_sum": 252.09
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79809665197"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-602",
      "city": "Казань",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 31, дом 66",
      "postalCode": "161149"
    },
    "toLocation": {
      "code": "LOC-489",
      "city": "Москва",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 2, дом 98",
      "postalCode": "180353"
    },
    "packages": [
      {
        "barcode": "PKG-19185",
        "weight": 13.57,
        "length": 60,
        "width": 62,
        "height": 57,
        "items": [
          {
            "name": "Телефон",
            "amount": 4,
            "cost": 41070.34
          }
        ]
      },
      {
        "barcode": "PKG-49782",
        "weight": 4.5,
        "length": 78,
        "width": 94,
        "height": 11,
        "items": [
          {
            "name": "Телевизор",
            "amount": 4,
            "cost": 44568.27
          },
          {
            "name": "Книга",
            "amount": 2,
            "cost": 29061.41
          },
          {
            "name": "Телефон",
            "amount": 4,
            "cost": 34293.73
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-003",
    "isReturn": true,
    "cdekNumber": "CDEK-7386",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-605",
    "deliveryPoint": "DP-496",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 3639.62,
      "vat_sum": 291.26
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79287780417"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-342",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 8, дом 88",
      "postalCode": "177551"
    },
    "toLocation": {
      "code": "LOC-415",
      "city": "Казань",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 47, дом 48",
      "postalCode": "160906"
    },
    "packages": [
      {
        "barcode": "PKG-74936",
        "weight": 18.1,
        "length": 72,
        "width": 56,
        "height": 22,
        "items": [
          {
            "name": "Телевизор",
            "amount": 4,
            "cost": 18588.61
          },
          {
            "name": "Книга",
            "amount": 4,
            "cost": 9159.58
          },
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 15024.62
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-004",
    "isReturn": true,
    "cdekNumber": "CDEK-4219",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-616",
    "deliveryPoint": "DP-698",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 4634.28,
      "vat_sum": 250.42
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79877994148"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-758",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 4, дом 26",
      "postalCode": "175796"
    },
    "toLocation": {
      "code": "LOC-676",
      "city": "Москва",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 24, дом 54",
      "postalCode": "199835"
    },
    "packages": [
      {
        "barcode": "PKG-14085",
        "weight": 6.58,
        "length": 60,
        "width": 90,
        "height": 80,
        "items": [
          {
            "name": "Телевизор",
            "amount": 2,
            "cost": 19821.29
          },
          {
            "name": "Одежда",
            "amount": 1,
            "cost": 25975.11
          }
        ]
      },
      {
        "barcode": "PKG-57666",
        "weight": 22.02,
        "length": 58,
        "width": 25,
        "height": 59,
        "items": [
          {
            "name": "Телевизор",
            "amount": 1,
            "cost": 40892.26
          }
        ]
      },
      {
        "barcode": "PKG-42365",
        "weight": 8.17,
        "length": 53,
        "width": 62,
        "height": 16,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 4,
            "cost": 49352.23
          },
          {
            "name": "Ноутбук",
            "amount": 2,
            "cost": 7252.96
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-005",
    "isReturn": true,
    "cdekNumber": "CDEK-4864",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-874",
    "deliveryPoint": "DP-821",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 2339.22,
      "vat_sum": 309.17
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79261943764"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-271",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 34, дом 45",
      "postalCode": "147641"
    },
    "toLocation": {
      "code": "LOC-234",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 44, дом 98",
      "postalCode": "184287"
    },
    "packages": [
      {
        "barcode": "PKG-70195",
        "weight": 32.85,
        "length": 36,
        "width": 64,
        "height": 70,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 16178.63
          },
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 1476.39
          }
        ]
      },
      {
        "barcode": "PKG-35150",
        "weight": 47.15,
        "length": 88,
        "width": 75,
        "height": 52,
        "items": [
          {
            "name": "Книга",
            "amount": 1,
            "cost": 4613.21
          },
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 911.45
          }
        ]
      },
      {
        "barcode": "PKG-57493",
        "weight": 29.83,
        "length": 80,
        "width": 19,
        "height": 10,
        "items": [
          {
            "name": "Книга",
            "amount": 5,
            "cost": 31329.46
          },
          {
            "name": "Телефон",
            "amount": 2,
            "cost": 16574.77
          },
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 24620.64
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-006",
    "isReturn": false,
    "cdekNumber": "CDEK-9433",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-838",
    "deliveryPoint": "DP-208",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 2067.5,
      "vat_sum": 293.47
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79396577334"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-517",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 19, дом 28",
      "postalCode": "121784"
    },
    "toLocation": {
      "code": "LOC-235",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 32, дом 71",
      "postalCode": "115511"
    },
    "packages": [
      {
        "barcode": "PKG-77108",
        "weight": 5.11,
        "length": 42,
        "width": 52,
        "height": 70,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 26752.23
          },
          {
            "name": "Ноутбук",
            "amount": 3,
            "cost": 32603.66
          },
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 38863.83
          }
        ]
      },
      {
        "barcode": "PKG-59772",
        "weight": 43.81,
        "length": 67,
        "width": 76,
        "height": 18,
        "items": [
          {
            "name": "Книга",
            "amount": 4,
            "cost": 23999.27
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-007",
    "isReturn": false,
    "cdekNumber": "CDEK-6930",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-731",
    "deliveryPoint": "DP-763",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 2371.05,
      "vat_sum": 129.18
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79071486574"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-897",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 4, дом 9",
      "postalCode": "137484"
    },
    "toLocation": {
      "code": "LOC-847",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 2, дом 19",
      "postalCode": "199295"
    },
    "packages": [
      {
        "barcode": "PKG-32911",
        "weight": 3.2,
        "length": 22,
        "width": 70,
        "height": 80,
        "items": [
          {
            "name": "Телефон",
            "amount": 4,
            "cost": 35687.98
          },
          {
            "name": "Телевизор",
            "amount": 1,
            "cost": 44425.37
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-008",
    "isReturn": false,
    "cdekNumber": "CDEK-2361",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-264",
    "deliveryPoint": "DP-645",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 3129.59,
      "vat_sum": 149.54
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79729453158"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-193",
      "city": "Москва",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 14, дом 20",
      "postalCode": "143191"
    },
    "toLocation": {
      "code": "LOC-134",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 31, дом 52",
      "postalCode": "117372"
    },
    "packages": [
      {
        "barcode": "PKG-11546",
        "weight": 47.46,
        "length": 90,
        "width": 44,
        "height": 52,
        "items": [
          {
            "name": "Телефон",
            "amount": 2,
            "cost": 30813.79
          },
          {
            "name": "Книга",
            "amount": 1,
            "cost": 43126.06
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-009",
    "isReturn": true,
    "cdekNumber": "CDEK-7658",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-396",
    "deliveryPoint": "DP-853",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 2657.9,
      "vat_sum": 429.13
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79996228065"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-608",
      "city": "Казань",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 2, дом 5",
      "postalCode": "153355"
    },
    "toLocation": {
      "code": "LOC-917",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 26, дом 21",
      "postalCode": "117406"
    },
    "packages": [
      {
        "barcode": "PKG-36175",
        "weight": 44.85,
        "length": 14,
        "width": 91,
        "height": 34,
        "items": [
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 10681.76
          },
          {
            "name": "Ноутбук",
            "amount": 5,
            "cost": 26782.84
          },
          {
            "name": "Одежда",
            "amount": 1,
            "cost": 22166.16
          }
        ]
      },
      {
        "barcode": "PKG-59645",
        "weight": 32.01,
        "length": 96,
        "width": 64,
        "height": 58,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 3,
            "cost": 17025.18
          },
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 48895.37
          },
          {
            "name": "Ноутбук",
            "amount": 4,
            "cost": 16593.47
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-010",
    "isReturn": false,
    "cdekNumber": "CDEK-8386",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-458",
    "deliveryPoint": "DP-998",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 3804.87,
      "vat_sum": 243.8
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79098998411"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-132",
      "city": "Казань",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 19, дом 57",
      "postalCode": "185614"
    },
    "toLocation": {
      "code": "LOC-239",
      "city": "Казань",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 27, дом 99",
      "postalCode": "147113"
    },
    "packages": [
      {
        "barcode": "PKG-79626",
        "weight": 32.69,
        "length": 25,
        "width": 91,
        "height": 77,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 21554.64
          },
          {
            "name": "Ноутбук",
            "amount": 5,
            "cost": 48610.62
          }
        ]
      },
      {
        "barcode": "PKG-87262",
        "weight": 39.21,
        "length": 77,
        "width": 66,
        "height": 12,
        "items": [
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 34464.98
          },
          {
            "name": "Книга",
            "amount": 2,
            "cost": 7951.98
          },
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 12196.06
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-011",
    "isReturn": true,
    "cdekNumber": "CDEK-3516",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-309",
    "deliveryPoint": "DP-564",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 2825.17,
      "vat_sum": 404.4
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79535323792"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-204",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 30, дом 80",
      "postalCode": "125388"
    },
    "toLocation": {
      "code": "LOC-578",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 40, дом 24",
      "postalCode": "119083"
    },
    "packages": [
      {
        "barcode": "PKG-63585",
        "weight": 27.13,
        "length": 85,
        "width": 79,
        "height": 55,
        "items": [
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 24276.66
          }
        ]
      },
      {
        "barcode": "PKG-60346",
        "weight": 20.88,
        "length": 10,
        "width": 68,
        "height": 14,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 1,
            "cost": 49085.24
          },
          {
            "name": "Телевизор",
            "amount": 4,
            "cost": 48030.55
          },
          {
            "name": "Одежда",
            "amount": 1,
            "cost": 20392.65
          }
        ]
      },
      {
        "barcode": "PKG-56764",
        "weight": 15.56,
        "length": 82,
        "width": 17,
        "height": 98,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 19045.09
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-012",
    "isReturn": false,
    "cdekNumber": "CDEK-8200",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-617",
    "deliveryPoint": "DP-780",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 3976.43,
      "vat_sum": 77.22
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79819802934"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-947",
      "city": "Москва",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 33, дом 71",
      "postalCode": "101990"
    },
    "toLocation": {
      "code": "LOC-239",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 29, дом 49",
      "postalCode": "115007"
    },
    "packages": [
      {
        "barcode": "PKG-24197",
        "weight": 31.32,
        "length": 28,
        "width": 83,
        "height": 52,
        "items": [
          {
            "name": "Одежда",
            "amount": 4,
            "cost": 14443.46
          }
        ]
      },
      {
        "barcode": "PKG-78471",
        "weight": 4.93,
        "length": 42,
        "width": 45,
        "height": 69,
        "items": [
          {
            "name": "Одежда",
            "amount": 3,
            "cost": 20136.98
          },
          {
            "name": "Одежда",
            "amount": 2,
            "cost": 4435.14
          },
          {
            "name": "Одежда",
            "amount": 5,
            "cost": 10914.76
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-013",
    "isReturn": false,
    "cdekNumber": "CDEK-2194",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-913",
    "deliveryPoint": "DP-294",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 2552.97,
      "vat_sum": 90.15
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79221432822"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-939",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 35, дом 37",
      "postalCode": "130512"
    },
    "toLocation": {
      "code": "LOC-383",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 28, дом 49",
      "postalCode": "147131"
    },
    "packages": [
      {
        "barcode": "PKG-46784",
        "weight": 42.45,
        "length": 31,
        "width": 83,
        "height": 81,
        "items": [
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 17004.02
          },
          {
            "name": "Одежда",
            "amount": 5,
            "cost": 48787.35
          },
          {
            "name": "Книга",
            "amount": 1,
            "cost": 37656.17
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-014",
    "isReturn": false,
    "cdekNumber": "CDEK-4856",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-444",
    "deliveryPoint": "DP-848",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 1257.61,
      "vat_sum": 412.65
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79467581492"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-573",
      "city": "Казань",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 48, дом 78",
      "postalCode": "102382"
    },
    "toLocation": {
      "code": "LOC-240",
      "city": "Москва",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 26, дом 14",
      "postalCode": "171973"
    },
    "packages": [
      {
        "barcode": "PKG-91343",
        "weight": 31.64,
        "length": 65,
        "width": 65,
        "height": 12,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 11848.2
          },
          {
            "name": "Одежда",
            "amount": 3,
            "cost": 38681.45
          }
        ]
      },
      {
        "barcode": "PKG-12522",
        "weight": 44.42,
        "length": 87,
        "width": 36,
        "height": 64,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 42661.54
          },
          {
            "name": "Одежда",
            "amount": 2,
            "cost": 18599.0
          },
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 41323.92
          }
        ]
      },
      {
        "barcode": "PKG-46469",
        "weight": 6.26,
        "length": 96,
        "width": 74,
        "height": 77,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 23389.19
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-015",
    "isReturn": false,
    "cdekNumber": "CDEK-1847",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-921",
    "deliveryPoint": "DP-807",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 1969.96,
      "vat_sum": 90.75
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79653818630"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-472",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 16, дом 44",
      "postalCode": "105602"
    },
    "toLocation": {
      "code": "LOC-271",
      "city": "Казань",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 23, дом 66",
      "postalCode": "181959"
    },
    "packages": [
      {
        "barcode": "PKG-77488",
        "weight": 21.04,
        "length": 57,
        "width": 75,
        "height": 90,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 23865.14
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-016",
    "isReturn": true,
    "cdekNumber": "CDEK-4920",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-479",
    "deliveryPoint": "DP-973",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 3825.25,
      "vat_sum": 84.34
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79861707454"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-167",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 43, дом 83",
      "postalCode": "125429"
    },
    "toLocation": {
      "code": "LOC-852",
      "city": "Казань",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 46, дом 9",
      "postalCode": "102540"
    },
    "packages": [
      {
        "barcode": "PKG-51212",
        "weight": 42.22,
        "length": 13,
        "width": 20,
        "height": 57,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 3,
            "cost": 18786.11
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-017",
    "isReturn": false,
    "cdekNumber": "CDEK-2099",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-861",
    "deliveryPoint": "DP-518",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 2038.77,
      "vat_sum": 117.67
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79657005799"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-974",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 6, дом 37",
      "postalCode": "197068"
    },
    "toLocation": {
      "code": "LOC-309",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 28, дом 47",
      "postalCode": "156061"
    },
    "packages": [
      {
        "barcode": "PKG-40750",
        "weight": 21.65,
        "length": 57,
        "width": 52,
        "height": 28,
        "items": [
          {
            "name": "Телефон",
            "amount": 2,
            "cost": 15222.59
          }
        ]
      },
      {
        "barcode": "PKG-98863",
        "weight": 2.7,
        "length": 49,
        "width": 25,
        "height": 51,
        "items": [
          {
            "name": "Телефон",
            "amount": 4,
            "cost": 37027.43
          },
          {
            "name": "Ноутбук",
            "amount": 3,
            "cost": 2762.32
          },
          {
            "name": "Книга",
            "amount": 5,
            "cost": 24855.25
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-018",
    "isReturn": false,
    "cdekNumber": "CDEK-7165",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-621",
    "deliveryPoint": "DP-651",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 202.84,
      "vat_sum": 101.6
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79755050308"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-943",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 6, дом 57",
      "postalCode": "197153"
    },
    "toLocation": {
      "code": "LOC-666",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 46, дом 20",
      "postalCode": "152476"
    },
    "packages": [
      {
        "barcode": "PKG-16802",
        "weight": 42.92,
        "length": 49,
        "width": 11,
        "height": 70,
        "items": [
          {
            "name": "Телефон",
            "amount": 3,
            "cost": 21462.79
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-019",
    "isReturn": true,
    "cdekNumber": "CDEK-1051",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-413",
    "deliveryPoint": "DP-282",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 1840.13,
      "vat_sum": 287.28
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79914708723"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-335",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 15, дом 90",
      "postalCode": "143659"
    },
    "toLocation": {
      "code": "LOC-121",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 4, дом 75",
      "postalCode": "189860"
    },
    "packages": [
      {
        "barcode": "PKG-52262",
        "weight": 48.17,
        "length": 19,
        "width": 24,
        "height": 42,
        "items": [
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 25258.22
          }
        ]
      },
      {
        "barcode": "PKG-33627",
        "weight": 2.82,
        "length": 87,
        "width": 60,
        "height": 70,
        "items": [
          {
            "name": "Одежда",
            "amount": 1,
            "cost": 3325.56
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-020",
    "isReturn": false,
    "cdekNumber": "CDEK-4073",
    "comment": "Без комментариев",
    "shipmentPoint": "SP-711",
    "deliveryPoint": "DP-970",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 2099.8,
      "vat_sum": 248.28
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79453904907"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-266",
      "city": "Москва",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 40, дом 91",
      "postalCode": "139981"
    },
    "toLocation": {
      "code": "LOC-465",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 18, дом 28",
      "postalCode": "191473"
    },
    "packages": [
      {
        "barcode": "PKG-63550",
        "weight": 33.24,
        "length": 50,
        "width": 10,
        "height": 27,
        "items": [
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 18392.47
          }
        ]
      },
      {
        "barcode": "PKG-33446",
        "weight": 19.77,
        "length": 26,
        "width": 10,
        "height": 67,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 33683.36
          },
          {
            "name": "Одежда",
            "amount": 3,
            "cost": 23083.14
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-021",
    "isReturn": true,
    "cdekNumber": "CDEK-2666",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-185",
    "deliveryPoint": "DP-823",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 4325.16,
      "vat_sum": 457.67
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79221130126"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-897",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 27, дом 54",
      "postalCode": "137170"
    },
    "toLocation": {
      "code": "LOC-474",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 21, дом 58",
      "postalCode": "102771"
    },
    "packages": [
      {
        "barcode": "PKG-17305",
        "weight": 23.72,
        "length": 53,
        "width": 84,
        "height": 65,
        "items": [
          {
            "name": "Телефон",
            "amount": 4,
            "cost": 21784.38
          }
        ]
      },
      {
        "barcode": "PKG-76688",
        "weight": 34.29,
        "length": 72,
        "width": 99,
        "height": 18,
        "items": [
          {
            "name": "Книга",
            "amount": 4,
            "cost": 40516.91
          },
          {
            "name": "Телефон",
            "amount": 5,
            "cost": 25717.72
          },
          {
            "name": "Книга",
            "amount": 5,
            "cost": 49535.04
          }
        ]
      },
      {
        "barcode": "PKG-17315",
        "weight": 39.9,
        "length": 37,
        "width": 91,
        "height": 94,
        "items": [
          {
            "name": "Книга",
            "amount": 5,
            "cost": 40256.9
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-022",
    "isReturn": false,
    "cdekNumber": "CDEK-8592",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-829",
    "deliveryPoint": "DP-834",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 371.66,
      "vat_sum": 92.42
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79336624169"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-255",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 26, дом 95",
      "postalCode": "127427"
    },
    "toLocation": {
      "code": "LOC-612",
      "city": "Казань",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 34, дом 39",
      "postalCode": "173115"
    },
    "packages": [
      {
        "barcode": "PKG-93279",
        "weight": 16.75,
        "length": 25,
        "width": 74,
        "height": 92,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 41590.64
          },
          {
            "name": "Книга",
            "amount": 5,
            "cost": 37932.6
          }
        ]
      },
      {
        "barcode": "PKG-82848",
        "weight": 10.55,
        "length": 88,
        "width": 38,
        "height": 84,
        "items": [
          {
            "name": "Книга",
            "amount": 4,
            "cost": 3599.38
          }
        ]
      },
      {
        "barcode": "PKG-86981",
        "weight": 32.61,
        "length": 83,
        "width": 41,
        "height": 73,
        "items": [
          {
            "name": "Телефон",
            "amount": 2,
            "cost": 36752.62
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-023",
    "isReturn": false,
    "cdekNumber": "CDEK-5122",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-683",
    "deliveryPoint": "DP-926",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 831.37,
      "vat_sum": 259.13
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Петр Сидоров",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79301249628"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-889",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 48, дом 96",
      "postalCode": "198567"
    },
    "toLocation": {
      "code": "LOC-563",
      "city": "Москва",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 49, дом 34",
      "postalCode": "192464"
    },
    "packages": [
      {
        "barcode": "PKG-51649",
        "weight": 48.39,
        "length": 22,
        "width": 33,
        "height": 32,
        "items": [
          {
            "name": "Книга",
            "amount": 5,
            "cost": 45129.73
          },
          {
            "name": "Одежда",
            "amount": 3,
            "cost": 24299.31
          }
        ]
      },
      {
        "barcode": "PKG-64310",
        "weight": 32.82,
        "length": 61,
        "width": 19,
        "height": 59,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 45798.92
          },
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 4110.87
          },
          {
            "name": "Ноутбук",
            "amount": 4,
            "cost": 38530.28
          }
        ]
      },
      {
        "barcode": "PKG-62576",
        "weight": 45.45,
        "length": 24,
        "width": 60,
        "height": 56,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 45339.13
          },
          {
            "name": "Телевизор",
            "amount": 1,
            "cost": 7001.39
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-024",
    "isReturn": false,
    "cdekNumber": "CDEK-8102",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-242",
    "deliveryPoint": "DP-806",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 3023.88,
      "vat_sum": 276.58
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79208572538"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-819",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 15, дом 15",
      "postalCode": "128756"
    },
    "toLocation": {
      "code": "LOC-679",
      "city": "Москва",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 15, дом 5",
      "postalCode": "124976"
    },
    "packages": [
      {
        "barcode": "PKG-25367",
        "weight": 4.03,
        "length": 23,
        "width": 12,
        "height": 59,
        "items": [
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 5583.74
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-025",
    "isReturn": true,
    "cdekNumber": "CDEK-3946",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-262",
    "deliveryPoint": "DP-724",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 4171.28,
      "vat_sum": 17.09
    },
    "sender": {
      "company": "ООО Рога и Копыта",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79837132152"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-492",
      "city": "Москва",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 18, дом 20",
      "postalCode": "196471"
    },
    "toLocation": {
      "code": "LOC-130",
      "city": "Казань",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 25, дом 36",
      "postalCode": "105301"
    },
    "packages": [
      {
        "barcode": "PKG-81899",
        "weight": 27.24,
        "length": 99,
        "width": 95,
        "height": 10,
        "items": [
          {
            "name": "Телевизор",
            "amount": 5,
            "cost": 35229.27
          }
        ]
      },
      {
        "barcode": "PKG-19034",
        "weight": 49.83,
        "length": 32,
        "width": 100,
        "height": 48,
        "items": [
          {
            "name": "Книга",
            "amount": 5,
            "cost": 48653.19
          },
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 12539.93
          },
          {
            "name": "Телевизор",
            "amount": 4,
            "cost": 28077.99
          }
        ]
      },
      {
        "barcode": "PKG-21119",
        "weight": 19.15,
        "length": 57,
        "width": 51,
        "height": 50,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 4,
            "cost": 20101.82
          },
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 48939.87
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-026",
    "isReturn": true,
    "cdekNumber": "CDEK-5088",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-556",
    "deliveryPoint": "DP-562",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 3086.48,
      "vat_sum": 241.17
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79096261148"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-435",
      "city": "Казань",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 21, дом 19",
      "postalCode": "170862"
    },
    "toLocation": {
      "code": "LOC-468",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 24, дом 58",
      "postalCode": "190847"
    },
    "packages": [
      {
        "barcode": "PKG-15473",
        "weight": 19.21,
        "length": 69,
        "width": 11,
        "height": 39,
        "items": [
          {
            "name": "Одежда",
            "amount": 1,
            "cost": 47566.69
          }
        ]
      },
      {
        "barcode": "PKG-43123",
        "weight": 4.74,
        "length": 44,
        "width": 72,
        "height": 67,
        "items": [
          {
            "name": "Книга",
            "amount": 1,
            "cost": 42328.08
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-027",
    "isReturn": true,
    "cdekNumber": "CDEK-1999",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-497",
    "deliveryPoint": "DP-470",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 3001.23,
      "vat_sum": 27.72
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Ольга Кузнецова",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ИП Иванов",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79645372982"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-295",
      "city": "Новосибирск",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 29, дом 9",
      "postalCode": "127421"
    },
    "toLocation": {
      "code": "LOC-794",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 49, дом 98",
      "postalCode": "154476"
    },
    "packages": [
      {
        "barcode": "PKG-71453",
        "weight": 4.22,
        "length": 22,
        "width": 16,
        "height": 51,
        "items": [
          {
            "name": "Книга",
            "amount": 3,
            "cost": 1409.19
          },
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 6762.78
          }
        ]
      },
      {
        "barcode": "PKG-38124",
        "weight": 8.55,
        "length": 79,
        "width": 12,
        "height": 61,
        "items": [
          {
            "name": "Телевизор",
            "amount": 1,
            "cost": 47485.49
          },
          {
            "name": "Телефон",
            "amount": 1,
            "cost": 32999.39
          },
          {
            "name": "Одежда",
            "amount": 3,
            "cost": 10410.71
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-028",
    "isReturn": false,
    "cdekNumber": "CDEK-4879",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-397",
    "deliveryPoint": "DP-666",
    "itemsCostCurrency": "USD",
    "deliveryRecipientCost": {
      "value": 406.13,
      "vat_sum": 364.99
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": true
    },
    "seller": {
      "name": "ООО Техномир"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Мария Иванова",
      "passportRequirementsSatisfied": true,
      "phones": [
        {
          "number": "+79067865543"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-890",
      "city": "Москва",
      "country": "Россия",
      "region": "Татарстан",
      "address": "Улица 18, дом 78",
      "postalCode": "122039"
    },
    "toLocation": {
      "code": "LOC-719",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 8, дом 99",
      "postalCode": "190282"
    },
    "packages": [
      {
        "barcode": "PKG-73802",
        "weight": 17.91,
        "length": 91,
        "width": 11,
        "height": 19,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 5,
            "cost": 25933.3
          },
          {
            "name": "Телевизор",
            "amount": 2,
            "cost": 35716.42
          }
        ]
      },
      {
        "barcode": "PKG-22323",
        "weight": 10.4,
        "length": 100,
        "width": 90,
        "height": 70,
        "items": [
          {
            "name": "Одежда",
            "amount": 2,
            "cost": 25115.14
          },
          {
            "name": "Ноутбук",
            "amount": 2,
            "cost": 15453.2
          }
        ]
      },
      {
        "barcode": "PKG-54408",
        "weight": 45.4,
        "length": 14,
        "width": 14,
        "height": 84,
        "items": [
          {
            "name": "Одежда",
            "amount": 5,
            "cost": 7338.68
          },
          {
            "name": "Ноутбук",
            "amount": 3,
            "cost": 14278.83
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-029",
    "isReturn": true,
    "cdekNumber": "CDEK-2783",
    "comment": "Обычный заказ",
    "shipmentPoint": "SP-104",
    "deliveryPoint": "DP-497",
    "itemsCostCurrency": "EUR",
    "deliveryRecipientCost": {
      "value": 1969.49,
      "vat_sum": 85.73
    },
    "sender": {
      "company": "ЗАО Грузоперевозки",
      "name": "Иван Петров",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ИП Васильев"
    },
    "recipient": {
      "company": "ЗАО Грузоперевозки",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79307350315"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-225",
      "city": "Казань",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 1, дом 94",
      "postalCode": "190345"
    },
    "toLocation": {
      "code": "LOC-730",
      "city": "Казань",
      "country": "Россия",
      "region": "Московская область",
      "address": "Улица 16, дом 97",
      "postalCode": "130256"
    },
    "packages": [
      {
        "barcode": "PKG-63388",
        "weight": 11.77,
        "length": 93,
        "width": 34,
        "height": 88,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 4,
            "cost": 29121.68
          }
        ]
      },
      {
        "barcode": "PKG-78639",
        "weight": 35.67,
        "length": 61,
        "width": 86,
        "height": 73,
        "items": [
          {
            "name": "Телевизор",
            "amount": 3,
            "cost": 31319.29
          },
          {
            "name": "Телевизор",
            "amount": 2,
            "cost": 22557.93
          }
        ]
      }
    ],
  },
  {
    "orderId": "ORD-2024-030",
    "isReturn": false,
    "cdekNumber": "CDEK-4018",
    "comment": "Срочная доставка",
    "shipmentPoint": "SP-247",
    "deliveryPoint": "DP-268",
    "itemsCostCurrency": "RUB",
    "deliveryRecipientCost": {
      "value": 423.65,
      "vat_sum": 261.21
    },
    "sender": {
      "company": "ИП Иванов",
      "name": "Алексей Смирнов",
      "passportRequirementsSatisfied": false
    },
    "seller": {
      "name": "ЗАО Электроника"
    },
    "recipient": {
      "company": "ООО Рога и Копыта",
      "name": "Дмитрий Орлов",
      "passportRequirementsSatisfied": false,
      "phones": [
        {
          "number": "+79113150797"
        }
      ]
    },
    "fromLocation": {
      "code": "LOC-834",
      "city": "Екатеринбург",
      "country": "Россия",
      "region": "Свердловская область",
      "address": "Улица 43, дом 51",
      "postalCode": "150680"
    },
    "toLocation": {
      "code": "LOC-916",
      "city": "Санкт-Петербург",
      "country": "Россия",
      "region": "Ленинградская область",
      "address": "Улица 33, дом 47",
      "postalCode": "146904"
    },
    "packages": [
      {
        "barcode": "PKG-79718",
        "weight": 15.65,
        "length": 87,
        "width": 41,
        "height": 69,
        "items": [
          {
            "name": "Ноутбук",
            "amount": 2,
            "cost": 41744.42
          },
          {
            "name": "Книга",
            "amount": 4,
            "cost": 42818.3
          }
        ]
      }
    ],
  }
]
