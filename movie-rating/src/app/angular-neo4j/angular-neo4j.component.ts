import { Component, OnInit } from '@angular/core';
import {AngularNeo4jService} from 'angular-neo4j';
const url = 'http://localhost:7474/';
const username = 'neo4j';
const password = 'neo';
const encrypted = true;
const query = 'MATCH (n:USER {name: $name}) RETURN n';
const params = {name: 'bob'};
@Component({
  selector: 'app-angular-neo4j',
  templateUrl: './angular-neo4j.component.html',
  styleUrls: ['./angular-neo4j.component.css']
})


export class AngularNeo4jComponent implements OnInit {

  constructor(private neo4j: AngularNeo4jService) { }

  ngOnInit(): void {
    this.neo4j.connect(url, username, password, encrypted).then(driver => {
      if (driver) {
        console.log('Succesfully connected to ' + url);
      }
    });
    this.neo4j.run(query, params).then(res => {
      console.log(res);
    });
    this.neo4j.disconnect();
  }

}
