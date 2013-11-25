App = new Ext.Application({
	name: "App",
	launch: function(){
		var stopCarousel=false;
		var carousel1 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="images/britbull.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/lab.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/ridgeback.jpg" />'
    		},
    		{
				html:'<img class="imageFit" src="http://upload.wikimedia.org/wikipedia/commons/2/28/Red_rose.jpg" />'
    		}],
			listeners:{
				cardswitch: function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 4);
				
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:200,
				direction:'down'
			},
			activeItem:0
		});
		var carousel2 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="images/britbull.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/lab.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/ridgeback.jpg" />'
    		},
    		{
				html:'<img class="imageFit" src="http://upload.wikimedia.org/wikipedia/commons/2/28/Red_rose.jpg" />'
    		}],
			listeners:{
				cardswitch:function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 4);
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:400,
				direction:'down'
			},
			activeItem:1
		});
		var carousel3 = new Ext.Carousel({
    		items: [{
				html:'<img class="imageFit" src="images/britbull.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/lab.jpg" />'
    		},{
				html:'<img class="imageFit" src="images/ridgeback.jpg" />'
    		},
    		{
				html:'<img class="imageFit" src="http://upload.wikimedia.org/wikipedia/commons/2/28/Red_rose.jpg" />'
    		}],
			listeners:{
				cardswitch:function(){
					if (!stopCarousel) this.setActiveItem((this.getActiveIndex() + 1) % 4);
				}
			},
			cardSwitchAnimation:{
				type:'slide',
				duration:300,
				direction:'down'
			},
			activeItem:3
		});
		var delayedTask=new Ext.util.DelayedTask(function(){
			stopCarousel=true;
			if(carousel1.getActiveIndex()==carousel2.getActiveIndex()&&carousel2.getActiveIndex()==carousel3.getActiveIndex())
				Ext.Msg.alert('Yeyyy','You got '+ ["English Bulldog", "Lab", "Ridgeback", "Red Rose"][carousel1.getActiveIndex()],Ext.emptyFn);
		});
		var cmp= new Ext.Panel({
			layout:{
				type:'hbox',
				align:'stretch'
			},
			defaults:{
				flex:1
			},
			dockedItems: [{
				xtype: "toolbar",
				dock: "top",
				title:'Heather\'s Puppies',
				items:[{
					xtype:'button',
					text:'Hit',
					handler:function(){
							stopCarousel=false;
							carousel1.setActiveItem((carousel1.getActiveIndex()+1)%4);
							carousel2.setActiveItem((carousel2.getActiveIndex()+1)%4);
							carousel3.setActiveItem((carousel3.getActiveIndex()+1)%4);
							delayedTask.delay(2000);	
					}
				}]
			}],
			items:[carousel1,carousel2,carousel3]
		});
		this.viewport = new Ext.Panel({
		fullscreen: true,
		layout:'fit',
		items:cmp
		});
		
	}
	
});
//end of module

