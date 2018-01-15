import { Routes, RouterModule } from '@angular/router';
import { <%= classify(name) %>ScreenComponent } from './<%=dasherize(name)%>.component';

const <%=dasherize(name)%>Routes: Routes = [
    {
      path: '', component: <%= classify(name) %>ScreenComponent
    }
];

export const <%= classify(name) %>Router = RouterModule.forChild(<%=dasherize(name)%>Routes);