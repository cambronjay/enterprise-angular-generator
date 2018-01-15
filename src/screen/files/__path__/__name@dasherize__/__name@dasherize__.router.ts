import { Routes, RouterModule } from '@angular/router';
import { <%= classify(name) %>ScreenComponent } from './<%=dasherize(name)%>.component';

const <%=camelize(name)%>Routes: Routes = [
    {
      path: '', component: <%= classify(name) %>ScreenComponent
    }
];

export const <%= classify(name) %>Router = RouterModule.forChild(<%=camelize(name)%>Routes);