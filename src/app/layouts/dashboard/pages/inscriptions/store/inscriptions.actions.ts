import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Inscription, InscriptionsData } from '../models';
import { Users } from '../../users/models';
import { Course } from '../../cursos/models/curso-interface';

export const InscriptionsActions = createActionGroup({
  source: 'Inscriptions',
  events: {
    'Load Inscriptions': emptyProps(),
    'Load Inscriptions Success': props<{ data: Inscription[]}>(),
    'Load Inscriptions Failure': props<{ error: unknown }>(),
    'Load Student': emptyProps(),
    'Load Student  Success': props<{ data: Users[]}>(),
    'Load Student  Failure': props<{ error: unknown }>(),
    'Load Courses': emptyProps(),
    'Load Courses  Success': props<{ data: Course[]}>(),
    'Load Courses  Failure': props<{ error: unknown }>(),
    'Create Inscription': props<{ data: InscriptionsData}>(),
    'Create Inscription  Success': props<{ data: Inscription}>(),
    'Create Inscription  Failure': props<{ error: unknown }>(),
  }
});
