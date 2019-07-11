<template>
  <div id="table">
    
    <button @click="generatePush()">PUSH SEND</button>

    <b>incele</b> chart:<br>
    https://developers.google.com/chart/interactive/docs/
    <br>
    https://www.chartjs.org/
    <br>

    <div class="p-3">
      <div class="col col-md-5">
        <h4>This Month Stats:</h4>
        Visits<span class="pull-right strong">+ 45%</span>
        <div class="progress">
          <div
            class="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="45"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width:45%"
          >45%</div>
        </div>

        395 New Users<span class="pull-right strong">+ 57%</span>
        <div class="progress">
          <div
            class="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="57"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width:57%"
          >57%</div>
        </div>

        12.593 Downloads<span class="pull-right strong">+ 25%</span>
        <div class="progress">
          <div
            class="progress-bar progress-bar-success"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width:25%"
          >25%</div>
        </div>
      </div>
    </div>

    <br>

    <div id="tabloDeneme" class="table-responsive">
      <table class="table table-striped table-sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>amet</td>
            <td>consectetur</td>
            <td>adipiscing</td>
            <td>elit</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>Integer</td>
            <td>nec</td>
            <td>odio</td>
            <td>Praesent</td>
          </tr>
          <tr>
            <td>1,003</td>
            <td>libero</td>
            <td>Sed</td>
            <td>cursus</td>
            <td>ante</td>
          </tr>
          <tr>
            <td>1,004</td>
            <td>dapibus</td>
            <td>diam</td>
            <td>Sed</td>
            <td>nisi</td>
          </tr>
          <tr>
            <td>1,005</td>
            <td>Nulla</td>
            <td>quis</td>
            <td>sem</td>
            <td>at</td>
          </tr>
          <tr>
            <td>1,006</td>
            <td>nibh</td>
            <td>elementum</td>
            <td>imperdiet</td>
            <td>Duis</td>
          </tr>
          <tr>
            <td>1,007</td>
            <td>sagittis</td>
            <td>ipsum</td>
            <td>Praesent</td>
            <td>mauris</td>
          </tr>
          <tr>
            <td>1,008</td>
            <td>Fusce</td>
            <td>nec</td>
            <td>tellus</td>
            <td>sed</td>
          </tr>
          <tr>
            <td>1,009</td>
            <td>augue</td>
            <td>semper</td>
            <td>porta</td>
            <td>Mauris</td>
          </tr>
          <tr>
            <td>1,010</td>
            <td>massa</td>
            <td>Vestibulum</td>
            <td>lacinia</td>
            <td>arcu</td>
          </tr>
          <tr>
            <td>1,011</td>
            <td>eget</td>
            <td>nulla</td>
            <td>Class</td>
            <td>aptent</td>
          </tr>
          <tr>
            <td>1,012</td>
            <td>taciti</td>
            <td>sociosqu</td>
            <td>ad</td>
            <td>litora</td>
          </tr>
          <tr>
            <td>1,013</td>
            <td>torquent</td>
            <td>per</td>
            <td>conubia</td>
            <td>nostra</td>
          </tr>
          <tr>
            <td>1,014</td>
            <td>per</td>
            <td>inceptos</td>
            <td>himenaeos</td>
            <td>Curabitur</td>
          </tr>
          <tr>
            <td>1,015</td>
            <td>sodales</td>
            <td>ligula</td>
            <td>in</td>
            <td>libero</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      pushData: {
        'notification': {
          "title": "Background Message Title hhg",
          "body": "Background Message Body hhg"
        },
        "to": ""
      }
    };
  },
  methods: {
    generatePush() {
      var key = 'AAAAnUwRijc:APA91bHCgJ_Ci5i21BvqgNBqTjsYZlFkuEALhqqxEW1VGRGy7icp1ph0RNbh0kjaHdoNs_3dpoppa_zwOmhuDQ2FkIr_R8-oZx9TFKaF-TOPauRFZoHzi8ANWwtARHJCXxVFoGs6h45k';
      const payload = {
        "notification": {
          "title": "Veri Güncellemesi Var 3",
          "body": "Değişen istatistikleri görebilirsiniz, gezebilirsiniz ayrıca, tuhaf haller var burda",
          "icon": "https://raporumsun.web.app/img/icons/msapplication-icon-144x144.png",
          "click_action": "https://raporumsun.web.app/#/table"
        },
        "data": {
          "message": "this message from hhgsun"	
        },
        "to": "/topics/all"
      };
      fetch('https://fcm.googleapis.com/fcm/send',{
        method: 'POST',
        headers: {
          'Authorization': 'key=' + key,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          notification: payload.notification,
          to: payload.to
        })
      }).then(function(res){
        console.log(res);
      }).catch(function(err){
        console.log(err);
      });

    }
  }
};
</script>

<style scoped>
.demo-chart:nth-child(1) {
  color: #acec00;
}
</style>


