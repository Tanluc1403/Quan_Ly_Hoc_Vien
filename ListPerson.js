
export default class  DSNS {
    constructor(){
        this.arr = [];
    }

    
    themNS (preson) {
        this.arr.push(preson);
        console.log(this.arr)
    }

    timViTriNS (maNS) {
        console.log(this.arr)
        let vitri = -1 ;
        
        this.arr.forEach((ns, index) => {
           
            console.log(ns.id);
            console.log(maNS);
            if(ns.id == maNS){
                
                vitri = index ;                
            }
            
        });
        console.log(vitri)
       return vitri;
    };

    xoaNS (maNS) {
        const index = this.timViTriNS(maNS);
        console.log(index)
        if(index !== -1){
            this.arr.splice(index,1);
        }
    };

    layThongTinNS  (maNS) {
        const index = this.timViTriNS(maNS);
        
        if (index !== -1) {
            console.log(this.arr[index]);
          return this.arr[index];
        }
        return null;
      };

    capNhatNS (ns) {
        const index = this.timViTriNS(ns.id);
        if(index !== -1){
            this.arr[index] = ns;
        } 
    }

}