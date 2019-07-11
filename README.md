# raporumsun

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# HHGsun ///////////////////////////////////////////////////////
@hhgsun:
işletmeden gelen servisi raporlamak amacıyla kullanılacak PWA.

* Push Notification:
POST: https://fcm.googleapis.com/fcm/send
HEADERS: Content-Type = application/json
         Authorization = key=|Firebase Sunucu anahtarı|
BODY: {
    "notification": {
        "title": "BAŞLIK",
        "body": "İÇERİK",
        "icon": "https://raporumsun.web.app/img/icons/msapplication-icon-144x144.png",
        "click_action": "https://raporumsun.web.app/#/table"
    },
    "data": {
    	"message": "this message from hhgsun"	
    },
    "to": "/topics/all"
}
-- to: token id, topic, all
