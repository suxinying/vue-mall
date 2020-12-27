const STORAGE_KEY = 'mall';
export default {
    setItem(key, value, module_name) {
        if (module_name) {
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name, val)
        } else {
            let mallObj = this.getStorage();
            mallObj[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(mallObj))
        }
    },
    getItem(key, module_name) {
        if (module_name) {
            let moduleObj = this.getItem(module_name)
            if (moduleObj) {
                return moduleObj[key]
            }
        }
        return this.getStorage()[key]
    },
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
    },
    clear(key, module_name) {
        let mallObj = this.getStorage();
        if(module_name){
            if(!mallObj[module_name]) return;
            delete mallObj[module_name][key];
        }else {
            delete mallObj[key];
        }
        this.setItem(mallObj);
    }
}