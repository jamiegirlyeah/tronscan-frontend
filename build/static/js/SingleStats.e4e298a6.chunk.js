webpackJsonp([12],{1851:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{priceGraph:e.markets.price}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(136),c=n(u),d=a(9),m=n(d),f=a(88),p=n(f),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();a(157),a(121);var v=a(0),y=n(v),E=a(34),b=n(E),_=a(12),C=a(27),k=a(18),S=a(10),x=a(17),w=a(220),N=a(28),T=a(785),D=n(T),P=a(717),I=n(P),O=a(8),z=a(418),R=n(z),M=a(35),B=a(62),F=n(B),A=a(30),L=n(A),j=a(29),X=(a(47),a(177)),U=n(X),V=a(200),H=a(1937),Y=a(415),$=p.default.Option,G=function(e){function t(){var e=this;l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.loadTotalTRXSupply=r(m.default.mark(function t(){var n,r,l,i,o,s,u,c;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.props.intl,e.next=3,_.Client.getFundsSupply();case 3:return r=e.sent,l=r.funds,i=[{value:l.turnOver,name:"circulating_supply",selected:!0,sliced:!0},{value:l.fundTrx,name:"total_frozen",selected:!1,sliced:!1}],e.next=8,b.default.get("https://api.coinmarketcap.com/v1/ticker/tronix/?convert=EUR");case 8:o=e.sent,s=(1e3*parseFloat(o.data[0].price_usd)).toFixed(2),u=(1e3*parseFloat(o.data[0].price_btc)).toFixed(5),c=(parseFloat(o.data[0].price_usd)*l.totalTurnOver).toFixed(2),a.setState({supplyTypesChart:i,genesisNum:n.formatNumber(l.genesisBlockIssue),blockProduceRewardsNum:n.formatNumber(l.totalBlockPay),nodeRewardsNum:n.formatNumber(l.totalNodePay),independenceDayBurned:n.formatNumber(l.burnPerDay),feeBurnedNum:n.formatNumber(l.burnByCharge),currentTotalSupply:l.totalTurnOver,priceUSD:s,priceBTC:u,marketCapitalization:c,foundationFreeze:n.formatNumber(l.fundTrx),circulatingNum:n.formatNumber(l.turnOver)});case 13:case"end":return e.stop()}},t,e)})),a.onChangeDate=function(e,t){var n=a.props.match,r=n.params.chartName;a.setState({ContractInvocationDistributionParams:h({},a.state.ContractInvocationDistributionParams,{time:e.valueOf()})},function(){switch(r){case"ContractInvocationDistribution":a.loadContractInvocationDistribution();break;case"EnergyConsumeDistribution":a.loadEnergyConsumeDistribution()}})},a.handleChangeSelect=function(e){var t=a.props.match,n=t.params.chartName,r={20:"Top20",50:"Top50",100:"Top100"};a.setState({ContractInvocationDistributionParams:h({},a.state.ContractInvocationDistributionParams,{range:e,range_type:r[e]})},function(){switch(n){case"ContractInvocationDistribution":a.loadContractInvocationDistribution();break;case"EnergyConsumeDistribution":a.loadEnergyConsumeDistribution()}})},a.disabledEndDate=function(e){var t=new Date-1728e5;return!(!e||!t)&&e.valueOf()>=t.valueOf()},a.customizedColumn=function(){var e=a.props.intl;return[{title:"#",dataIndex:"index",key:"index",width:"40px",align:"center",render:function(e,t,a){return y.default.createElement("span",null,e)}},{title:(0,x.upperFirst)(e.formatMessage({id:"contract_address"})),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return y.default.createElement(j.AddressLink,{address:e,isContract:!0})}},{title:(0,x.upperFirst)(e.formatMessage({id:"contract_name"})),dataIndex:"name",key:"name",render:function(e,t,a){return y.default.createElement("span",null,e||"-")}},{title:(0,x.upperFirst)(e.formatMessage({id:"total_energy_used"})),dataIndex:"total_energy",key:"total_energy",render:function(e,t,a){return y.default.createElement(S.FormattedNumber,{value:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"freezing_energy"})),dataIndex:"energy",key:"energy",render:function(e,t,a){return y.default.createElement(S.FormattedNumber,{value:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"burning_energy"})),dataIndex:"trx",key:"trx",render:function(e,t,a){return y.default.createElement(S.FormattedNumber,{value:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"energy_scale"})),dataIndex:"percent",key:"percent",render:function(e,t,a){return y.default.createElement("span",null,e)}}]},a.callCustomizedColumn=function(){var e=a.props.intl;return[{title:"#",dataIndex:"index",key:"index",width:"40px",align:"center",render:function(e,t,a){return y.default.createElement("span",null,e)}},{title:(0,x.upperFirst)(e.formatMessage({id:"contract_address"})),dataIndex:"contract_address",key:"contract_address",render:function(e,t,a){return y.default.createElement(j.AddressLink,{address:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"contract_name"})),dataIndex:"name",key:"name",render:function(e,t,a){return y.default.createElement("span",null,e||"-")}},{title:(0,x.upperFirst)(e.formatMessage({id:"call_address_time"})),dataIndex:"caller_amount",key:"caller_amount",render:function(e,t,a){return y.default.createElement(S.FormattedNumber,{value:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"call_time"})),dataIndex:"trigger_amount",key:"trigger_amount",render:function(e,t,a){return y.default.createElement(S.FormattedNumber,{value:e})}},{title:(0,x.upperFirst)(e.formatMessage({id:"call_address_scale"})),dataIndex:"caller_percent",key:"caller_percent",render:function(e,t,a){return y.default.createElement("span",null,e)}},{title:(0,x.upperFirst)(e.formatMessage({id:"call_scale"})),dataIndex:"trigger_percent",key:"trigger_percent",render:function(e,t,a){return y.default.createElement("span",null,e)}}]},a.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,txOverviewStatsFull:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null,volumeStats:null,summit:null,pieChart:null,supplyTypesChart:null,genesisNum:null,blockProduceRewardsNum:null,nodeRewardsNum:null,independenceDayBurned:null,feeBurnedNum:null,currentTotalSupply:null,priceUSD:null,priceBTC:null,marketCapitalization:null,foundationFreeze:null,circulatingNum:null,energyConsumeData:null,ContractInvocation:null,ContractInvocationDistribution:null,ContractInvocationDistributionParams:{time:(new Date).getTime()-1728e5,range:20,total_used_energy:0,scale:"",range_type:"Top20"},EnergyConsumeDistribution:null},a}return o(t,e),g(t,[{key:"componentDidMount",value:function(){var e=this;switch(this.props.match.params.chartName){case"supply":this.loadTotalTRXSupply(),setInterval(function(){e.loadTotalTRXSupply()},3e4);break;case"pieChart":this.loadPieChart();break;case"volumeStats":this.loadVolume();break;case"priceStats":this.loadPriceStats();break;case"accounts":this.loadAccounts();break;case"EnergyConsume":this.loadEnergyConsumeData();break;case"ContractInvocation":this.loadContractInvocation();break;case"ContractInvocationDistribution":this.loadContractInvocationDistribution();break;case"EnergyConsumeDistribution":this.loadEnergyConsumeDistribution();break;default:this.loadTxOverviewStats()}}},{key:"compare",value:function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}},{key:"loadAccounts",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.get("https://assistapi.tronscan.org/api/account?limit=35&sort=-balance");case 2:t=e.sent,a=t.data,this.setState({accounts:(0,x.filter)(a,function(e){return!(0,x.includes)(w.tronAddresses,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/C.ONE_TRX}})});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadPieChart",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.intl,e.next=3,_.Client.getStatisticData();case 3:a=e.sent,n=a.statisticData,r=[],n.length>0&&n.map(function(e,a){r.push({key:a+1,name:e.name?e.name:e.url,volumeValue:t.formatNumber(e.blockProduced),volumePercentage:t.formatNumber(100*e.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),this.setState({pieChart:r});case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadVolume",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l,i,o,s;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.intl,e.next=3,b.default.get("https://server.tron.network/api/v2/node/market_data");case 3:a=e.sent,n=a.data.market_cap_by_available_supply,r=n.map(function(e,a){return{time:e[0],volume_billion:e[1]/Math.pow(10,9),volume_usd:t.formatNumber(e[1])+" USD",volume_usd_num:e[1]}}),this.setState({volumeStats:r.slice(27,r.length-1)}),l={date:"",increment:""},i={date:"",increment:""},o=(0,x.cloneDeep)(r).sort(this.compare("volume_usd_num"));for(s in o)o[s]=h({date:o[s].time},o[s]);this.setState({summit:{volumeStats_sort:[{date:o[o.length-1].time,increment:o[o.length-1].volume_usd_num},{date:o[0].time,increment:o[0].volume_usd_num}]}});case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadPriceStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l,i,o,s,u,c,d,f,p;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.intl,a=new Date,n=a.getTime(),r=new Date("2017/10/10"),l=r.getTime(),i=Math.floor((n-l)/1e3/3600/24),e.next=8,b.default.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+i);case 8:o=e.sent,s=o.data,u=s.Data,this.setState({priceStats:u}),c={date:"",increment:""},d={date:"",increment:""},f=(0,x.cloneDeep)(u).sort(this.compare("close"));for(p in f)f[p]=h({date:f[p].time},f[p]);this.setState({summit:{priceStats_sort:[{date:1e3*f[f.length-1].time,increment:f[f.length-1].close},{date:1e3*f[0].time,increment:f[0].close}]}});case 17:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadTxOverviewStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l,i,o,s,u,c,d,f,p,h,g,v,y,E,b;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}},e.next=3,_.Client.getTxOverviewStatsAll();case 3:t=e.sent,a=t.txOverviewStats,n=[],r=[],l=[],i=[];for(o in a)s=parseInt(o),0===s?(n.push({avgBlockSize:a[s].avgBlockSize,avgBlockTime:a[s].avgBlockTime,blockchainSize:a[s].blockchainSize,date:a[s].date,newAddressSeen:a[s].newAddressSeen,newBlockSeen:a[s].newBlockSeen,newTransactionSeen:a[s].newTransactionSeen,totalAddress:a[s].totalAddress,totalBlockCount:a[s].totalBlockCount,totalTransaction:a[s].totalTransaction,newtotalTransaction:a[s].totalTransaction,newtotalAddress:a[s].totalAddress,newtotalBlockCount:a[s].totalBlockCount}),r.push({date:a[s].date,total:a[s].newAddressSeen,increment:a[s].newAddressSeen})):(n.push({date:a[s].date,totalTransaction:a[s].totalTransaction-a[s-1].totalTransaction,avgBlockTime:a[s].avgBlockTime,avgBlockSize:a[s].avgBlockSize,totalBlockCount:a[s].totalBlockCount-a[s-1].totalBlockCount,newAddressSeen:a[s].newAddressSeen,newtotalTransaction:a[s].totalTransaction,newtotalAddress:a[s].totalAddress,newtotalBlockCount:a[s].totalBlockCount}),r.push({date:a[s].date,total:a[s].totalAddress,increment:a[s].newAddressSeen})),l.push({date:a[s].date,avgBlockSize:a[s].avgBlockSize}),i.push({date:a[s].date,blockchainSize:a[s].blockchainSize});this.setState({txOverviewStats:n.slice(0,n.length-1),txOverviewStatsFull:n.slice(0,n.length),addressesStats:r.slice(0,r.length-1),blockSizeStats:l,blockchainSizeStats:i}),c={date:"",increment:""},d={date:"",increment:""},f=(0,x.cloneDeep)(r).sort(u("increment")),p=(0,x.cloneDeep)(n).sort(u("totalTransaction")),h=(0,x.cloneDeep)(n).sort(u("newtotalTransaction")),g=(0,x.cloneDeep)(l).sort(u("avgBlockSize")),v=[];for(y in i)E=parseInt(y),0===E?v.push({date:i[0].date,blockchainSize:i[0].blockchainSize/1e6}):v.push({date:i[E].date,blockchainSize:(i[E].blockchainSize-i[E-1].blockchainSize)/1e6});b=v.sort(u("blockchainSize")),this.setState({summit:{addressesStats_sort:[{date:f[f.length-1].date,increment:f[f.length-1].increment},{date:f[0].date,increment:f[0].increment}],txOverviewStats_sort:[{date:p[p.length-1].date,increment:p[p.length-1].totalTransaction},{date:p[0].date,increment:p[0].totalTransaction}],totalTxns_sort:[{date:h[h.length-1].date,increment:h[h.length-1].newtotalTransaction},{date:h[0].date,increment:h[0].newtotalTransaction}],blockSizeStats_sort:[{date:g[g.length-1].date,increment:g[g.length-1].avgBlockSize},{date:g[0].date,increment:g[0].avgBlockSize}],blockchainSizeStats_sort:[{date:b[b.length-1].date,increment:b[b.length-1].blockchainSize},{date:b[0].date,increment:b[0].blockchainSize}]}});case 21:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadEnergyConsumeData",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.get(C.API_URL+"/api/energystatistic");case 2:t=e.sent,a=t.data,a.data.pop(),this.setState({energyConsumeData:a.data,summit:{EnergyConsume_sort:[{date:a.max.day,increment:a.max.total_energy},{date:a.min.day,increment:a.min.total_energy}]}});case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadContractInvocation",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.default.get(C.API_URL+"/api/triggerstatistic");case 2:return t=e.sent,a=t.data,e.next=6,b.default.get(C.API_URL+"/api/calleraddressstatistic");case 6:n=e.sent,r=n.data,a.data.pop(),r.data.pop(),l={trigger_amount:[],address_amount:[]},a.data.map(function(e){l.trigger_amount.push([(0,L.default)(e.day).valueOf(),e.triggers_amount])}),r.data.map(function(e){l.address_amount.push([(0,L.default)(e.day).valueOf(),e.caller_amount])}),this.setState({ContractInvocation:l,summit:{ContractInvocation_sort:[{date:a.max.day,increment:a.max.triggers_amount},{date:a.min.day,increment:a.min.triggers_amount}]}});case 14:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadEnergyConsumeDistribution",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l,i,o,s,u,c;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.ContractInvocationDistributionParams,a=t.time,n=t.range,e.next=3,b.default.get(C.API_URL+"/api/energydailystatistic?limit="+n+"&day="+a);case 3:r=e.sent,l=r.data,i=l.total,o=l.totalEnergy,s=l.data,u=0,c="",s.map(function(e,t){e.percent=(e.total_energy/o*100).toFixed(2)+"%",e.index=t+1,e.name=e.name||"-",u+=e.total_energy}),c=(u/o*100).toFixed(2)+"%",this.setState({EnergyConsumeDistribution:s,ContractInvocationDistributionParams:h({},this.state.ContractInvocationDistributionParams,{total_used_energy:u,scale:c,total_energy:o})});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadContractInvocationDistribution",value:function(){function e(){return t.apply(this,arguments)}var t=r(m.default.mark(function e(){var t,a,n,r,l,i,o,s,u,c;return m.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.ContractInvocationDistributionParams,a=t.time,n=t.range,e.next=3,b.default.get(C.API_URL+"/api/triggeramountstatistic?limit="+n+"&day="+a);case 3:r=e.sent,l=r.data,i=l.data,o=l.totalCallerAmount,s=l.totalTrigger,u=0,c="",i.map(function(e,t){e.caller_percent=(e.caller_amount/o).toFixed(2)+"%",e.trigger_percent=(e.trigger_amount/s).toFixed(2)+"%",e.index=t+1,e.name=e.name||"-"}),c=(u/i.totalTrigger).toFixed(2)+"%",this.setState({ContractInvocationDistribution:i,ContractInvocationDistributionParams:h({},this.state.ContractInvocationDistributionParams,{total_energy:s})});case 13:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.match,a=e.intl,n=this.state,r=n.txOverviewStats,l=n.txOverviewStatsFull,i=n.addressesStats,o=n.blockSizeStats,s=n.blockchainSizeStats,u=n.priceStats,d=n.transactionStats,m=n.transactionValueStats,f=n.blockStats,h=n.accounts,g=n.volumeStats,v=n.pieChart,E=n.supplyTypesChart,b=n.summit,_=n.genesisNum,k=n.blockProduceRewardsNum,S=n.nodeRewardsNum,x=n.independenceDayBurned,w=n.feeBurnedNum,T=n.currentTotalSupply,P=n.priceUSD,z=n.priceBTC,B=n.marketCapitalization,A=n.foundationFreeze,j=n.circulatingNum,X=n.energyConsumeData,Y=n.ContractInvocation,G=n.ContractInvocationDistribution,J=n.ContractInvocationDistributionParams,q=n.EnergyConsumeDistribution,K=void 0,Q=C.API_URL+"/api/v2/node/overview_upload",W=this.customizedColumn(),Z=this.callCustomizedColumn(),ee=U.default?240:500;return K="blockchainSizeStats"===t.params.chartName||"addressesStats"===t.params.chartName?"increase":"number",y.default.createElement("main",{className:"container header-overlap"},"pieChart"!=t.params.chartName&&"supply"!=t.params.chartName&&"ContractInvocationDistribution"!=t.params.chartName&&"EnergyConsumeDistribution"!=t.params.chartName?y.default.createElement("div",{className:"alert alert-light",role:"alert"},y.default.createElement("div",{className:"row"},y.default.createElement("div",{className:"col-md-6 text-center"},b&&b[t.params.chartName+"_sort"]&&y.default.createElement("span",null,(0,O.t)("highest"),(0,O.t)(K),(0,O.t)("_of"),y.default.createElement("strong",null," "+b[t.params.chartName+"_sort"][0].increment+" "),(0,O.t)("was_recorded_on")," ",a.formatDate(b[t.params.chartName+"_sort"][0].date))),y.default.createElement("div",{className:"col-md-6 text-center"},b&&b[t.params.chartName+"_sort"]&&y.default.createElement("span",null,(0,O.t)("lowest"),(0,O.t)(K),(0,O.t)("_of"),y.default.createElement("strong",null," "+b[t.params.chartName+"_sort"][1].increment+" "),(0,O.t)("was_recorded_on")," ",a.formatDate(b[t.params.chartName+"_sort"][1].date))))):null,y.default.createElement("div",{className:"row"},y.default.createElement("div",{className:"col-md-12"},y.default.createElement("div",{className:"card"},y.default.createElement("div",{className:"card-body p-3 p-md-5"},"txOverviewStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===r?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartTx,{source:"singleChart",style:{height:ee},data:r,intl:a})),"totalTxns"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===l?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartTotalTxns,{source:"singleChart",style:{height:ee},data:l,intl:a})),"addressesStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===i?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartAdd,{source:"singleChart",style:{height:ee},data:i,intl:a})),"blockSizeStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===o?y.default.createElement(N.TronLoader,null):y.default.createElement(V.BarReactHighChartBlockSize,{source:"singleChart",style:{height:ee},data:o,intl:a})),"blockchainSizeStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===s?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartBlockchainSize,{source:"singleChart",style:{height:ee},data:s,intl:a})),"priceStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===u?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartPrice,{source:"singleChart",style:{height:ee},data:u,intl:a})),"accounts"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===h?y.default.createElement(N.TronLoader,null):y.default.createElement(D.default,{style:{height:ee},data:h})),"transactionValueStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===m?y.default.createElement(N.TronLoader,null):y.default.createElement(I.default,{message:{id:"trx_transferred_past_hour",href:"transactionValueStats"},style:{height:ee},data:m,keysData:["timestamp","value"],format:{timestamp:!0}})),"transactionStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===d?y.default.createElement(N.TronLoader,null):y.default.createElement(I.default,{message:{id:"transactions_past_hour",href:"transactionStats"},style:{height:ee},data:d,keysData:["timestamp","value"],format:{timestamp:!0}})),"blockStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===f?y.default.createElement(N.TronLoader,null):y.default.createElement(I.default,{message:{id:"average_blocksize",href:"blockStats"},style:{height:ee},data:f,keysData:["timestamp","value"],format:{timestamp:!0}})),"volumeStats"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===g?y.default.createElement(N.TronLoader,null):y.default.createElement(V.LineReactHighChartVolumeUsd,{style:{height:ee},data:g,intl:a})),"EnergyConsume"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===X?y.default.createElement(N.TronLoader,null):y.default.createElement(V.EnergyConsumeChart,{source:"singleChart",style:{height:ee},data:X,type:"c2",intl:a})),"ContractInvocation"===t.params.chartName&&y.default.createElement("div",{style:{height:ee}},null===Y?y.default.createElement(N.TronLoader,null):y.default.createElement(V.ContractInvocationChart,{source:"singleChart",style:{height:ee},data:Y,intl:a})),"EnergyConsumeDistribution"===t.params.chartName&&y.default.createElement("div",null,null===q?y.default.createElement(N.TronLoader,null):y.default.createElement("div",null,y.default.createElement("div",{className:"d-md-flex justify-content-between pb-3"},y.default.createElement(c.default,{onChange:this.onChangeDate,disabledDate:this.disabledEndDate,defaultValue:(0,L.default)(new Date(J.time),"YYYY-MM-DD")}),y.default.createElement("div",{className:"pt-3 pt-md-0"},y.default.createElement("span",{className:"mr-2"},(0,O.tu)("range"),": "),y.default.createElement(p.default,{defaultValue:"top20",style:{width:160},onChange:this.handleChangeSelect},y.default.createElement($,{value:"20"},"top20"),y.default.createElement($,{value:"50"},"top50"),y.default.createElement($,{value:"100"},"top100")))),y.default.createElement(V.EnergyConsumeDistributionChart,{style:{height:ee},data:q,intl:a}),y.default.createElement("div",{className:"token_black"},y.default.createElement("div",{className:"col-md-12 table_pos"},y.default.createElement("p",null,a.formatMessage({id:"a_total"})+a.formatNumber(J.total_energy)+a.formatMessage({id:"energe"})+" ("+a.formatMessage({id:"with_the_proportion_of"})+J.scale+") "+a.formatMessage({id:"uesd_by_the"})+J.range_type+a.formatMessage({id:"contracts_from_the_total_used_of"})+a.formatNumber(J.total_used_energy)+a.formatMessage({id:"energe"})),0===q.length?y.default.createElement("div",{className:"p-3 text-center no-data"},(0,O.tu)("no_data")):y.default.createElement(F.default,{bordered:!0,column:W,data:q}))))),"ContractInvocationDistribution"===t.params.chartName&&y.default.createElement("div",null,null===G?y.default.createElement(N.TronLoader,null):y.default.createElement("div",null,y.default.createElement("div",{className:"d-md-flex justify-content-between pb-3"},y.default.createElement(c.default,{onChange:this.onChangeDate,disabledDate:this.disabledEndDate,defaultValue:(0,L.default)(new Date(J.time),"YYYY-MM-DD")}),y.default.createElement("div",{className:"pt-3 pt-md-0"},y.default.createElement("span",{className:"mr-2"},(0,O.tu)("range"),": "),y.default.createElement(p.default,{defaultValue:"top20",style:{width:160},onChange:this.handleChangeSelect},y.default.createElement($,{value:"20"},"top20"),y.default.createElement($,{value:"50"},"top50"),y.default.createElement($,{value:"100"},"top100")))),y.default.createElement(V.ContractInvocationDistributionChart,{style:{height:ee},data:G,intl:a}),y.default.createElement("div",{className:"token_black"},y.default.createElement("div",{className:"col-md-12 table_pos"},y.default.createElement("p",null,a.formatMessage({id:"a_total"})+a.formatNumber(J.total_energy)+a.formatMessage({id:"Contract_times_calls"})),0===G.length?y.default.createElement("div",{className:"p-3 text-center no-data"},(0,O.tu)("no_data")):y.default.createElement(F.default,{bordered:!0,column:Z,data:G}))))),"pieChart"===t.params.chartName&&y.default.createElement("div",null,null===v?y.default.createElement(N.TronLoader,null):y.default.createElement(H.RepresentativesRingPieReact,{source:"singleChart",message:{id:"produce_distribution"},intl:a,data:v,style:{height:ee}})),"supply"===t.params.chartName&&y.default.createElement("div",null,null===E?y.default.createElement(N.TronLoader,null):y.default.createElement("div",{className:"row",style:{fontSize:12,marginRight:0}},y.default.createElement("div",{className:"col-md-5"},y.default.createElement("div",{className:"table-responsive"},y.default.createElement("table",{className:"table",style:{marginTop:10}},y.default.createElement("thead",null,y.default.createElement("tr",null,y.default.createElement("th",{style:{border:0}},y.default.createElement("i",{className:"fa fa-puzzle-piece"}),y.default.createElement("span",{style:{marginTop:2}},(0,O.tu)("TRX_distribution_overview"))))),y.default.createElement("tbody",null,y.default.createElement("tr",null,y.default.createElement("td",null,(0,O.tu)("genesis"),":"),y.default.createElement("td",null,_," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,"+  ",(0,O.tu)("block_produce_rewards"),":"),y.default.createElement("td",null,k," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,"+ ",(0,O.tu)("node_rewards"),":"),y.default.createElement("td",null,S," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,"- ",(0,O.tu)("independence_day_burned"),":"),y.default.createElement("td",null,x," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,"- ",(0,O.tu)("fee_burned"),":"),y.default.createElement("td",null,w," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,"= ",y.default.createElement("b",null,(0,O.tu)("current_total_supply"),":"),y.default.createElement("br",null)),y.default.createElement("td",null,y.default.createElement("b",null,a.formatNumber(T)," TRX"))),y.default.createElement("tr",null,y.default.createElement("td",{style:{color:"red"},className:"go-foundation"},y.default.createElement(M.Link,{to:"/blockchain/foundation",style:{color:"red"}},(0,O.tu)("total_frozen"))),y.default.createElement("td",null,A," TRX")),y.default.createElement("tr",null,y.default.createElement("td",null,(0,O.tu)("circulating_supply"),":"),y.default.createElement("td",null,j," TRX"))))),y.default.createElement("br",null),y.default.createElement("div",{className:"table-responsive"},y.default.createElement("table",{className:"table",style:{marginBottom:0}},y.default.createElement("thead",null,y.default.createElement("tr",null,y.default.createElement("th",{style:{border:0}},y.default.createElement("br",null),y.default.createElement("i",{className:"fa fa-coins"})," ",(0,O.tu)("price_per_1000_trx")))),y.default.createElement("tbody",null,y.default.createElement("tr",null,y.default.createElement("td",null,(0,O.tu)("in_USD"),":"),y.default.createElement("td",null,"$",P)),y.default.createElement("tr",null,y.default.createElement("td",null,(0,O.tu)("in_BTC"),":"),y.default.createElement("td",null,z)))),y.default.createElement("div",{style:{fontSize:12,color:"#999",whiteSpace:"nowrap",textAlign:"left",padding:"0.75rem",borderTop:"1px solid #DFD7CA",verticalAlign:"top"}},y.default.createElement("div",{style:{transform:"scale(.9)",marginLeft:"-1.3rem"}},"*",(0,O.tu)("supply_notes"))))),y.default.createElement("div",{className:"col-md-7",style:{backgroundColor:"#F5F5F5",marginTop:0,paddingBottom:15}},y.default.createElement("div",{className:"main-counters row"},y.default.createElement("div",{className:"counters col-md-6 col-sm-6"},y.default.createElement("span",{className:"counter"},y.default.createElement(R.default,{start:0,end:T,duration:2,separator:",",decimals:2})),y.default.createElement("h4",null,(0,O.tu)("total_TRX_supply"))),y.default.createElement("div",{className:"counters col-md-6 col-sm-6"},y.default.createElement("span",{className:"counter"},"$",y.default.createElement(R.default,{start:0,end:B,duration:2,separator:",",decimals:2})),y.default.createElement("h4",null,(0,O.tu)("market_capitalization")))),y.default.createElement("div",{className:"card"},y.default.createElement("div",{className:"card-body",style:{height:400}},y.default.createElement(H.SupplyTypesTRXPieChart,{message:{id:"breakdown_supply_types"},intl:a,data:E,style:{height:300,marginTop:25},source:"singleChart"})))))))),"txOverviewStats"===t.params.chartName&&y.default.createElement("div",{style:{marginTop:20,float:"right"}},y.default.createElement("i",{size:"1",style:{fontStyle:"normal"}},"[ Download ",y.default.createElement("a",{href:Q,style:{color:"#C23631"}},y.default.createElement("b",null,"CSV Export")),"\xa0",y.default.createElement("span",{className:"glyphicon glyphicon-download-alt"})," ]"),"\xa0"))))}}]),t}(y.default.Component),J={loadPriceData:Y.loadPriceData};t.default=(0,k.connect)(s,J)((0,S.injectIntl)(G))},1937:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SupplyTypesTRXPieChart=t.RepresentativesRingPieReact=t.RingPieReact=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),d=(a(18),a(10),a(276)),m=n(d),f=a(223),p=n(f);a(707),a(279),a(224),a(1938),a(1939),a(1940),a(1941);var h=a(17),g=a(1942),v=n(g),y=a(708),E=n(y),b=a(709),_=n(b),C=a(710),k=n(C),S=a(711),x=n(S);(0,E.default)(v.default),(0,_.default)(v.default),(0,k.default)(v.default),(0,x.default)(v.default),t.RingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a=this.props,n=a.intl,l=a.data,i=a.message,o=p.default.getInstanceByDom(document.getElementById(e));if(void 0===o&&(o=p.default.init(document.getElementById(e))),m.default.ringPieChart.title.text=n.formatMessage({id:i.id})+" Top 10",m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=[],l&&l.length>0){var s=l.sort(t("name")),u=[],c=[],d=[];for(var f in s)u.push({name:s[f].pair,value:s[f].volume}),d.indexOf(s[f].name)<0&&(d.push(s[f].name),c.push({name:s[f].name,value:0,subCount:[]}));for(var h in c)for(var g in s)s[g].name===c[h].name&&(c[h].value=c[h].value+s[g].volume,c[h].subCount.push({name:s[g].pair,value:s[g].volume}));c.sort(t("value"));var v=c.slice(c.length-10,c.length),y=[];for(var E in v)y.push.apply(y,r(v[E].subCount));m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=d,m.default.ringPieChart.series[0].data=v,m.default.ringPieChart.series[1].data=y}l&&0===l.length&&(m.default.ringPieChart.title.text="No data"),o.setOption(m.default.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.RepresentativesRingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=t.source,i=(0,h.cloneDeep)(m.default.ringPieHighChart3D);if(n.length)for(var o in n)n[o].name.indexOf("http://")>-1&&(n[o].name=n[o].name.substring(7).split(".com")[0]);if(n&&0===n.length&&(i.title.text="No data"),n&&n.length>0){var s=[],u=[];for(var c in n)u.indexOf(n[c].name)<0&&(u.push(n[c].name),s.push([n[c].name,Number(n[c].volumeValue)]));var d=i.series[0].data;d.push.apply(d,s)}i.chart.options3d.enabled=!0,i.title.text=a.formatMessage({id:r.id}),i.exporting.filename=a.formatMessage({id:r.id}),i.tooltip.formatter=function(e){return a.formatDate(this.point.x),a.formatMessage({id:"witness"})+" : "+this.point.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+this.point.y+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},"representatives"==l&&(i.plotOptions.pie.showInLegend=!1,i.plotOptions.pie.innerSize=60,i.plotOptions.pie.depth=40,i.exporting.enabled=!1,i.title.text=""),v.default.chart(document.getElementById(e),i)}},{key:"shouldComponentUpdate",value:function(e){return e.intl.locale!==this.props.intl.locale}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.SupplyTypesTRXPieChart=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=(t.source,(0,h.cloneDeep)(m.default.supplyPieHighChart));if(n&&0===n.length&&(l.title.text="No data"),n&&n.length>0){var i=[];for(var o in n)i.indexOf(n[o].name)<0&&l.series[0].data.push({name:a.formatMessage({id:n[o].name}),y:parseInt(n[o].value),selected:n[o].selected,sliced:n[o].sliced})}l.title.text=a.formatMessage({id:r.id}),l.exporting.filename=a.formatMessage({id:r.id}),l.tooltip.formatter=function(){return a.formatMessage({id:this.point.name})+" ("+a.formatNumber(this.point.y)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+this.point.percentage.toFixed(2)+"%"},v.default.chart(document.getElementById(e),l)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component)},1938:function(e,t,a){e.exports=a(116)(1583)},1939:function(e,t,a){e.exports=a(116)(1586)},1940:function(e,t,a){e.exports=a(116)(1587)},1941:function(e,t,a){e.exports=a(116)(1588)},1942:function(e,t,a){e.exports=a(116)(1674)}});