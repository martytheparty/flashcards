import { 
  Component,
  inject,
  effect
} from '@angular/core';
import { VoiceRecognitionService } from '../../services/voice-recognition.service';

@Component({
  selector: 'app-results',
  imports: [],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class ResultsComponent {

    voiceRecognitionService: VoiceRecognitionService = inject(VoiceRecognitionService);
    
}
