import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { PacienteService, Result } from '../paciente.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-paciente-lista',
  templateUrl: './paciente-lista.component.html',
  styleUrls: ['./paciente-lista.component.css'],
  providers: [PacienteService, FormBuilder]
})
export class PacienteListaComponent implements OnInit {
  results: Result[] = [];
  page = 0;
  formGroup: FormGroup;
  isLoading = true;
  isError = false;

  genderSelect: SelectItem[] = [{
    label: 'All Gender',
    value: null
  },{
    label: 'Male',
    value: 'male'
  }, {
    label: 'Female',
    value: 'female'
  }];

  selectedPatientid: string | undefined;
  selectedPatient: Result | undefined = undefined;

  constructor(private pacienteService: PacienteService, private route: ActivatedRoute,  private router: Router, formBuilder: FormBuilder,) { 
    this.formGroup = formBuilder.group({
      global: [undefined],
      gender: [undefined],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['page']) {
        this.page = parseInt(params['page'])
      }
      if (params['id']) { 
        this.selectedPatientid = params['id'];
      }

      this.buscarPacientes();
    });
  }

  close() {
    this.router.navigate(['paciente', this.page, 'all'])
  }
  
  select(patient: Result) {
    this.selectedPatient = patient;
    this.router.navigate(['paciente', this.page, patient.login.uuid]);
  }

  filter() {
    return this.results.filter((item) => {
      const globalFilter = this.formGroup.get('global')?.value;
      const gender = this.formGroup.get('gender')?.value;

      const testNameAndNat = () => item.name.first.toLowerCase().startsWith(globalFilter.toLowerCase()) || item.nat.toLowerCase() === globalFilter.toLowerCase();
      const testGender = () => item.gender.toLowerCase() === gender;

      if(globalFilter && gender) {
        return testNameAndNat() && testGender();
      } else if(globalFilter) {
        return testNameAndNat();
      } else if (gender) {
        return testGender();
      } else {
        return true;
      }
    });
  }


  buscarPacientes() {
    this.isLoading = true;
    this.isError = false;
    this.pacienteService.buscarPacientes({ 'page' : this.page, 'results': 50, seed: 'coodesh'}).pipe(finalize(() => {
      this.isLoading = false;
    })).subscribe(rs => {
      this.results = [...this.results, ...rs.results]

      if(this.selectedPatientid) {
        this.selectedPatient = this.results.find(it => it.login.uuid === this.selectedPatientid);
      }
    }, err => {
      this.isError = true;
    })
  }

  loadMore() {
    this.router.navigate(['paciente', this.page + 1, this.selectedPatientid]);
  }

}

