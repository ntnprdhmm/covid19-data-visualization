const frenchData = JSON.parse('[{"date":"2020-01-24T00:00:00","country":"France","infections":2,"deaths":0,"healings":0},{"date":"2020-01-25T00:00:00","country":"France","infections":3,"deaths":0,"healings":0},{"date":"2020-01-26T00:00:00","country":"France","infections":3,"deaths":0,"healings":0},{"date":"2020-01-27T00:00:00","country":"France","infections":3,"deaths":0,"healings":0},{"date":"2020-01-28T00:00:00","country":"France","infections":4,"deaths":0,"healings":0},{"date":"2020-01-29T00:00:00","country":"France","infections":5,"deaths":0,"healings":0},{"date":"2020-01-30T00:00:00","country":"France","infections":5,"deaths":0,"healings":0},{"date":"2020-01-31T00:00:00","country":"France","infections":5,"deaths":0,"healings":0},{"date":"2020-02-01T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-02T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-03T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-04T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-05T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-06T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-07T00:00:00","country":"France","infections":6,"deaths":0,"healings":0},{"date":"2020-02-08T00:00:00","country":"France","infections":11,"deaths":0,"healings":0},{"date":"2020-02-09T00:00:00","country":"France","infections":11,"deaths":0,"healings":0},{"date":"2020-02-10T00:00:00","country":"France","infections":11,"deaths":0,"healings":0},{"date":"2020-02-11T00:00:00","country":"France","infections":11,"deaths":0,"healings":0},{"date":"2020-02-12T00:00:00","country":"France","infections":11,"deaths":0,"healings":2},{"date":"2020-02-13T00:00:00","country":"France","infections":11,"deaths":0,"healings":2},{"date":"2020-02-14T00:00:00","country":"France","infections":11,"deaths":0,"healings":2},{"date":"2020-02-15T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-16T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-17T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-18T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-19T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-20T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-21T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-22T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-23T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-24T00:00:00","country":"France","infections":12,"deaths":1,"healings":4},{"date":"2020-02-25T00:00:00","country":"France","infections":14,"deaths":1,"healings":11},{"date":"2020-02-26T00:00:00","country":"France","infections":18,"deaths":2,"healings":11},{"date":"2020-02-27T00:00:00","country":"France","infections":38,"deaths":2,"healings":11},{"date":"2020-02-28T00:00:00","country":"France","infections":57,"deaths":2,"healings":11},{"date":"2020-02-29T00:00:00","country":"France","infections":100,"deaths":2,"healings":12},{"date":"2020-03-01T00:00:00","country":"France","infections":130,"deaths":2,"healings":12},{"date":"2020-03-02T00:00:00","country":"France","infections":191,"deaths":3,"healings":12},{"date":"2020-03-03T00:00:00","country":"France","infections":204,"deaths":4,"healings":12},{"date":"2020-03-04T00:00:00","country":"France","infections":285,"deaths":4,"healings":12},{"date":"2020-03-05T00:00:00","country":"France","infections":377,"deaths":6,"healings":12},{"date":"2020-03-06T00:00:00","country":"France","infections":653,"deaths":9,"healings":12},{"date":"2020-03-07T00:00:00","country":"France","infections":949,"deaths":11,"healings":12},{"date":"2020-03-08T00:00:00","country":"France","infections":1126,"deaths":19,"healings":12},{"date":"2020-03-09T00:00:00","country":"France","infections":1412,"deaths":25,"healings":12},{"date":"2020-03-10T00:00:00","country":"France","infections":1784,"deaths":33,"healings":12},{"date":"2020-03-11T00:00:00","country":"France","infections":2281,"deaths":48,"healings":12},{"date":"2020-03-12T00:00:00","country":"France","infections":2876,"deaths":61,"healings":12},{"date":"2020-03-13T00:00:00","country":"France","infections":3664,"deaths":79,"healings":12},{"date":"2020-03-14T00:00:00","country":"France","infections":4477,"deaths":91,"healings":12},{"date":"2020-03-15T00:00:00","country":"France","infections":5423,"deaths":127,"healings":12},{"date":"2020-03-16T00:00:00","country":"France","infections":6645,"deaths":148,"healings":12},{"date":"2020-03-17T00:00:00","country":"France","infections":7730,"deaths":175,"healings":12},{"date":"2020-03-18T00:00:00","country":"France","infections":9134,"deaths":264,"healings":12},{"date":"2020-03-19T00:00:00","country":"France","infections":10995,"deaths":372,"healings":12},{"date":"2020-03-20T00:00:00","country":"France","infections":12625,"deaths":450,"healings":12},{"date":"2020-03-21T00:00:00","country":"France","infections":14301,"deaths":562,"healings":12},{"date":"2020-03-22T00:00:00","country":"France","infections":16018,"deaths":674,"healings":2200},{"date":"2020-03-23T00:00:00","country":"France","infections":19874,"deaths":860,"healings":2200},{"date":"2020-03-24T00:00:00","country":"France","infections":22304,"deaths":1100,"healings":3281},{"date":"2020-03-25T00:00:00","country":"France","infections":25233,"deaths":1331,"healings":3900},{"date":"2020-03-26T00:00:00","country":"France","infections":29155,"deaths":1696,"healings":4948},{"date":"2020-03-27T00:00:00","country":"France","infections":32964,"deaths":1995,"healings":5700},{"date":"2020-03-28T00:00:00","country":"France","infections":37575,"deaths":2314,"healings":5700},{"date":"2020-03-29T00:00:00","country":"France","infections":40174,"deaths":2606,"healings":7202},{"date":"2020-03-30T00:00:00","country":"France","infections":44550,"deaths":3024,"healings":7927},{"date":"2020-03-31T00:00:00","country":"France","infections":52128,"deaths":3523,"healings":9444},{"date":"2020-04-01T00:00:00","country":"France","infections":56989,"deaths":4032,"healings":10934},{"date":"2020-04-02T00:00:00","country":"France","infections":59105,"deaths":5387,"healings":12428},{"date":"2020-04-03T00:00:00","country":"France","infections":64338,"deaths":6507,"healings":14008},{"date":"2020-04-04T00:00:00","country":"France","infections":89953,"deaths":7560,"healings":15438},{"date":"2020-04-05T00:00:00","country":"France","infections":92840,"deaths":8078,"healings":16183},{"date":"2020-04-06T00:00:00","country":"France","infections":98011,"deaths":8911,"healings":17250},{"date":"2020-04-07T00:00:00","country":"France","infections":109070,"deaths":10328,"healings":19337},{"date":"2020-04-08T00:00:00","country":"France","infections":112951,"deaths":10869,"healings":21254},{"date":"2020-04-09T00:00:00","country":"France","infections":117750,"deaths":12210,"healings":23206},{"date":"2020-04-10T00:00:00","country":"France","infections":124870,"deaths":13197,"healings":24932},{"date":"2020-04-11T00:00:00","country":"France","infections":124870,"deaths":13197,"healings":24932}]');
const globalData = JSON.parse('[{"date":"2020-01-22T00:00:00","infections":555,"deaths":17,"healings":28},{"date":"2020-01-23T00:00:00","infections":653,"deaths":18,"healings":30},{"date":"2020-01-24T00:00:00","infections":941,"deaths":26,"healings":36},{"date":"2020-01-25T00:00:00","infections":1438,"deaths":42,"healings":39},{"date":"2020-01-26T00:00:00","infections":2118,"deaths":56,"healings":52},{"date":"2020-01-27T00:00:00","infections":2927,"deaths":82,"healings":61},{"date":"2020-01-28T00:00:00","infections":5578,"deaths":131,"healings":107},{"date":"2020-01-29T00:00:00","infections":6165,"deaths":133,"healings":126},{"date":"2020-01-30T00:00:00","infections":8235,"deaths":171,"healings":143},{"date":"2020-01-31T00:00:00","infections":9925,"deaths":213,"healings":222},{"date":"2020-02-01T00:00:00","infections":12038,"deaths":259,"healings":284},{"date":"2020-02-02T00:00:00","infections":16787,"deaths":362,"healings":472},{"date":"2020-02-03T00:00:00","infections":19881,"deaths":426,"healings":623},{"date":"2020-02-04T00:00:00","infections":23892,"deaths":492,"healings":852},{"date":"2020-02-05T00:00:00","infections":27636,"deaths":564,"healings":1124},{"date":"2020-02-06T00:00:00","infections":30818,"deaths":634,"healings":1487},{"date":"2020-02-07T00:00:00","infections":34392,"deaths":719,"healings":2011},{"date":"2020-02-08T00:00:00","infections":37121,"deaths":806,"healings":2616},{"date":"2020-02-09T00:00:00","infections":40151,"deaths":906,"healings":3244},{"date":"2020-02-10T00:00:00","infections":42763,"deaths":1013,"healings":3946},{"date":"2020-02-11T00:00:00","infections":44803,"deaths":1113,"healings":4683},{"date":"2020-02-12T00:00:00","infections":45222,"deaths":1118,"healings":5150},{"date":"2020-02-13T00:00:00","infections":60370,"deaths":1371,"healings":6295},{"date":"2020-02-14T00:00:00","infections":66887,"deaths":1523,"healings":8058},{"date":"2020-02-15T00:00:00","infections":69032,"deaths":1666,"healings":9395},{"date":"2020-02-16T00:00:00","infections":71226,"deaths":1770,"healings":10865},{"date":"2020-02-17T00:00:00","infections":73260,"deaths":1868,"healings":12583},{"date":"2020-02-18T00:00:00","infections":75138,"deaths":2007,"healings":14352},{"date":"2020-02-19T00:00:00","infections":75641,"deaths":2122,"healings":16121},{"date":"2020-02-20T00:00:00","infections":76199,"deaths":2247,"healings":18177},{"date":"2020-02-21T00:00:00","infections":76843,"deaths":2251,"healings":18890},{"date":"2020-02-22T00:00:00","infections":78599,"deaths":2458,"healings":22886},{"date":"2020-02-23T00:00:00","infections":78985,"deaths":2469,"healings":23394},{"date":"2020-02-24T00:00:00","infections":79570,"deaths":2629,"healings":25227},{"date":"2020-02-25T00:00:00","infections":80415,"deaths":2708,"healings":27905},{"date":"2020-02-26T00:00:00","infections":81397,"deaths":2770,"healings":30384},{"date":"2020-02-27T00:00:00","infections":82756,"deaths":2814,"healings":33277},{"date":"2020-02-28T00:00:00","infections":84124,"deaths":2872,"healings":36711},{"date":"2020-02-29T00:00:00","infections":86013,"deaths":2941,"healings":39782},{"date":"2020-03-01T00:00:00","infections":88371,"deaths":2996,"healings":42716},{"date":"2020-03-02T00:00:00","infections":90309,"deaths":3085,"healings":45602},{"date":"2020-03-03T00:00:00","infections":92844,"deaths":3160,"healings":48229},{"date":"2020-03-04T00:00:00","infections":95124,"deaths":3254,"healings":51171},{"date":"2020-03-05T00:00:00","infections":97886,"deaths":3348,"healings":53797},{"date":"2020-03-06T00:00:00","infections":101800,"deaths":3460,"healings":55866},{"date":"2020-03-07T00:00:00","infections":105836,"deaths":3558,"healings":58359},{"date":"2020-03-08T00:00:00","infections":109814,"deaths":3803,"healings":60695},{"date":"2020-03-09T00:00:00","infections":113785,"deaths":4002,"healings":62512},{"date":"2020-03-10T00:00:00","infections":118582,"deaths":4262,"healings":64404},{"date":"2020-03-11T00:00:00","infections":125865,"deaths":4615,"healings":67003},{"date":"2020-03-12T00:00:00","infections":133836,"deaths":4964,"healings":68560},{"date":"2020-03-13T00:00:00","infections":145196,"deaths":5442,"healings":70251},{"date":"2020-03-14T00:00:00","infections":156100,"deaths":5819,"healings":72624},{"date":"2020-03-15T00:00:00","infections":168589,"deaths":6490,"healings":76034},{"date":"2020-03-16T00:00:00","infections":181646,"deaths":7132,"healings":78088},{"date":"2020-03-17T00:00:00","infections":197220,"deaths":7932,"healings":80840},{"date":"2020-03-18T00:00:00","infections":215003,"deaths":8849,"healings":83313},{"date":"2020-03-19T00:00:00","infections":242829,"deaths":9996,"healings":84962},{"date":"2020-03-20T00:00:00","infections":272167,"deaths":11299,"healings":87403},{"date":"2020-03-21T00:00:00","infections":304528,"deaths":12973,"healings":91676},{"date":"2020-03-22T00:00:00","infections":337124,"deaths":14625,"healings":97243},{"date":"2020-03-23T00:00:00","infections":378289,"deaths":16499,"healings":100958},{"date":"2020-03-24T00:00:00","infections":417966,"deaths":18615,"healings":107705},{"date":"2020-03-25T00:00:00","infections":467594,"deaths":21181,"healings":113770},{"date":"2020-03-26T00:00:00","infections":529591,"deaths":23970,"healings":122150},{"date":"2020-03-27T00:00:00","infections":593291,"deaths":27198,"healings":130915},{"date":"2020-03-28T00:00:00","infections":660693,"deaths":30652,"healings":139415},{"date":"2020-03-29T00:00:00","infections":720140,"deaths":33925,"healings":149082},{"date":"2020-03-30T00:00:00","infections":782389,"deaths":37582,"healings":164566},{"date":"2020-03-31T00:00:00","infections":857487,"deaths":42107,"healings":178034},{"date":"2020-04-01T00:00:00","infections":932605,"deaths":46809,"healings":193177},{"date":"2020-04-02T00:00:00","infections":1013303,"deaths":52983,"healings":210263},{"date":"2020-04-03T00:00:00","infections":1095917,"deaths":58787,"healings":225796},{"date":"2020-04-04T00:00:00","infections":1197408,"deaths":64606,"healings":246152},{"date":"2020-04-05T00:00:00","infections":1272115,"deaths":69374,"healings":260012},{"date":"2020-04-06T00:00:00","infections":1345101,"deaths":74565,"healings":276515},{"date":"2020-04-07T00:00:00","infections":1426096,"deaths":81865,"healings":300054},{"date":"2020-04-08T00:00:00","infections":1511104,"deaths":88338,"healings":328661},{"date":"2020-04-09T00:00:00","infections":1595350,"deaths":95455,"healings":353975},{"date":"2020-04-10T00:00:00","infections":1691719,"deaths":102525,"healings":376096},{"date":"2020-04-11T00:00:00","infections":1698626,"deaths":102774,"healings":376734}]');