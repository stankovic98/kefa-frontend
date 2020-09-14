import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Common} from '../common';

@Injectable()
export class HomeService {
  domainUrl = Common.apiUrl

  constructor(private http: HttpClient) {}

  public getTodaysGospel() {
    return {
      byWhom: "Čitanje svetog Evanđelja po Mateju",
      text:
        "U ono vrijeme: Reče Isus svojim učenicima: »Pazite da svoje pravednosti ne činite pred ljudima da vas oni vide.Inače nema vam plaće u vašeg Oca koji je na nebesima. Kada dakle dijeliš milostinju, ne trubi pred sobom, kako to po sinagogama i ulicama čine licemjeri da bi ih ljudi hvalili. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kada daješ milostinju — neka ti ne zna ljevica što čini desnica, da tvoja milostinja bude u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti! Tako i kad molite, ne budite kao licemjeri. Vole moliti stojeći u sinagogama i na raskršćima ulica da se pokažu ljudima. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kad moliš, uđi u svoju sobu, zatvori vrata i pomoli se svomu Ocu koji je u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti. I kad postite, ne budite smrknuti kao licemjeri. Izobličuju lica da pokažu ljudima kako poste. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kad postiš, pomaži glavu i umij lice da ne zapaze ljudi kako postiš, nego Otac tvoj, koji je u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti.«U ono vrijeme: Reče Isus svojim učenicima: »Pazite da svoje pravednosti ne činite pred ljudima da vas oni vide.Inače nema vam plaće u vašeg Oca koji je na nebesima. Kada dakle dijeliš milostinju, ne trubi pred sobom, kako to po sinagogama i ulicama čine licemjeri da bi ih ljudi hvalili. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kada daješ milostinju — neka ti ne zna ljevica što čini desnica, da tvoja milostinja bude u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti! Tako i kad molite, ne budite kao licemjeri. Vole moliti stojeći u sinagogama i na raskršćima ulica da se pokažu ljudima. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kad moliš, uđi u svoju sobu, zatvori vrata i pomoli se svomu Ocu koji je u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti. I kad postite, ne budite smrknuti kao licemjeri. Izobličuju lica da pokažu ljudima kako poste. Zaista, kažem vam, primili su svoju plaću. Ti naprotiv, kad postiš, pomaži glavu i umij lice da ne zapaze ljudi kako postiš, nego Otac tvoj, koji je u skrovitosti. I Otac tvoj, koji vidi u skrovitosti, uzvratit će ti.«"
    };
  }

  public getDefaultDiocese(): string {
    return localStorage.getItem("dioceseID")
  }

  public getDefaultParish(): string {
    return localStorage.getItem("parishID")
  }

  public setDefaultDiocese(dioceseID: string) {
    localStorage.setItem("dioceseID", dioceseID)
  }

  public setDefaultParish(parishID: string) {
    localStorage.setItem("parishID", parishID)
  }

  public getDioceses() {
    return this.http.get(this.domainUrl + "/all-diocese").toPromise().then((data: Diocese[]) => {
      console.log(data)
      return data
    }).catch(err => console.log(err))
  }

  public getParishes(dioceseID: string) {
    return this.http.get(this.domainUrl + "/all-parishes?dioceseID=" + dioceseID).toPromise().then((parishes: any) => {
      return parishes
    }).catch(err => {
      console.error("can't get parises: ", err)
    })
  }

}

export interface Diocese {
  uid: string
  name: string
  info: string
}
