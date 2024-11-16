<script type="text/javascript">
        console.log(1);
function toOneDimension(previousValue,currentValue){
            return previousValue.concat(currentValue);
        }
        console.log(2);
        
        var sampleArrayA=[
            ['A1','A2','A3'],
            ['B1','B2','B3'],
            ['C1','C2','C3']
        ]; 
        console.log(sampleArrayA);

        sampleArrayA.reverse();
        console.log(sampleArrayA);
        
            var sampleArrayB= sampleArrayA.reduce(toOneDimension);
            for(var counterVar=0;counterVar<sampleArrayB.length;counterVar++){
                console.log(ココにコンソールに表示したい何かを記述する);
                document.write('sampleArrayB['+counterVar +']:');
                document.write(sampleArrayB[counterVar]);
                document.write('<br/>');
            }
</script>