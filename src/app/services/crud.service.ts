import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireStorage} from '@angular/fire/compat/storage';
import {concatAll, finalize} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url:any
  registros:any
  id: any

  constructor(private database: AngularFirestore, private storage: AngularFireStorage) { }

  create(coleccion: any,form:any){
    let promesa = new Promise((resolve,reject)=>{
      this.database.collection(coleccion).add(form).then((response)=>
      {
        let id=response.id;
        resolve(id)
       this.database.collection(coleccion).doc(id).update({
        url:this.url
       })
       console.log(id)
      }).catch((err)=>{reject(false)})
    })
    return promesa
  }
  
  upload(coleccion:any, event:any){
    let promesa = new Promise( (resolve, reject)=>{
      for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const filePath = coleccion+'/'+Math.random();
        const fileRef = this.storage.ref(filePath)
        const task = this.storage.upload(filePath, file)
        task.snapshotChanges()
        .pipe(
          finalize(()=>{
            const downloadURL = fileRef.getDownloadURL();
            downloadURL.subscribe(url => {
              resolve(url)
              this.url = url
              console.log(this.url)
            });
          }),
        )
        .subscribe();
      }
    })
  }

  read(coleccion:any){
    var promise = new Promise((resolve)=>{
      this.registros = [];
      this.registros=this.database.collection(coleccion).valueChanges().subscribe(response=>{
        resolve(response)
      });
    })
    return promise
  }

  update(coleccion:any, registro:any){
    let promesa = new Promise((resolve, reject)=>{
      this.database.collection(coleccion).doc(registro.id).set(registro).then(resp=>{
        resolve(true)
        if(this.url == "" || this.url != ""){
          this.database.collection(coleccion).doc(registro.id).update({
            url:this.url,
            id: registro.id
          })
        }
      }).catch((err)=>{
        reject(false)
      })
    })
    return promesa;
  }

  delete(coleccion:any, registro:any){
    let promesa = new Promise((resolve, reject)=>{
      this.database.collection(coleccion).doc(registro.id).delete().then((response)=>{
        resolve(true)
        if(true){
          this.storage.storage.refFromURL(registro.url).delete();
        }
      }).catch((err)=>{
        reject(false)
      })
    })
    return promesa;
  }

  order(coleccion:any, orden:any){
    let promesa = new Promise((resolve,reject)=>{
      this.registros=[];
      this.registros=this.database.collection(coleccion, ref => ref.orderBy(orden,'asc')).valueChanges().subscribe(response =>{
        resolve(response)
      });
    })
    return promesa
  }

  filter(coleccion:any, campo:any, filtro:any){
    let promesa = new Promise((resolve)=>{
      this.registros=[];
      this.registros=this.database.collection(coleccion,ref => ref.where(campo,"==",filtro)).valueChanges().subscribe(response=>{
        resolve(response)
      })
    })
    return promesa
  }
}
