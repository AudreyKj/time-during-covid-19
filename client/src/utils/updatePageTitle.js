export function updatePageTitle(){
    const tunnelsMonth = this.tunnelLength * 5;

    const feb21 = 7.6;
    const jan21 = feb21 + tunnelsMonth;
    const dec20 = jan21 + tunnelsMonth;
    const nov20 = dec20 + tunnelsMonth;
    const oct20 = nov20 + tunnelsMonth;
    const sept20 = oct20 + tunnelsMonth;
    const aug20 = sept20 + tunnelsMonth;
    const july20 = aug20 + tunnelsMonth;
    const june20 = july20 + tunnelsMonth;
    const may20 = june20 + tunnelsMonth;
    const april20 = may20 + tunnelsMonth;
    const march20 = april20 + tunnelsMonth;


    if (this.camera.position.z > -0.0026 && this.camera.position.z < feb21) {
        document.title = 'MARCH 2021'
    } else if (this.camera.position.z > feb21 && this.camera.position.z < jan21) {
        document.title = 'FEBRUARY 2021'
    } else if (this.camera.position.z > jan21 && this.camera.position.z < dec20) {
        document.title = 'JANUARY 2021'
    } else if (this.camera.position.z > dec20 && this.camera.position.z < nov20) {
        document.title = 'DECEMBER 2020'
    } else if (this.camera.position.z > nov20 && this.camera.position.z < oct20) {
        document.title = 'NOVEMBER 2020'
    } else if (this.camera.position.z > oct20 && this.camera.position.z < sept20) {
        document.title = 'OCTOBER 2020'
    } else if (this.camera.position.z > sept20 && this.camera.position.z < aug20) {
        document.title = 'SEPTEMBER 2020'
    } else if (this.camera.position.z > aug20 && this.camera.position.z < july20) {
        document.title = 'AUGUST 2020'
    } else if (this.camera.position.z > july20 && this.camera.position.z < june20) {
        document.title = 'JULY 2020'
    } else if (this.camera.position.z > june20 && this.camera.position.z < may20) {
        document.title = 'JUNE 2020'
    } else if (this.camera.position.z > may20 && this.camera.position.z < april20) {
        document.title = 'MAY 2020'
    } else if (this.camera.position.z > april20 && this.camera.position.z < march20) {
        document.title = 'APRIL 2020'
    } else if (this.camera.position.z > march20 && this.camera.position.z < 85.4) {
        document.title = 'MARCH 2020'
    } else {
        document.title = 'TIME DURING COVID-19'
    }
}