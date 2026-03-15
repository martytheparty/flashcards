import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { VoiceStateEnum } from '../types/enums/voice-recognition.enums';

declare var webkitSpeechRecognition: any;
declare var SpeechRecognition: any;

@Injectable({
  providedIn: 'root',
})
export class VoiceRecognitionService {
  private recognition: any;
  recognitionOn = false;

  voiceRecognitionStateSignal: WritableSignal<VoiceStateEnum> = signal<VoiceStateEnum>(VoiceStateEnum.Off);
  voiceRecognitionResultSignal: WritableSignal<any[]> = signal<any[]>([]);
  constructor() {

    if ('SpeechRecongition' in window) {
      this.recognition =  new SpeechRecognition();
    }  else if ('webkitSpeechRecognition' in window) {
      this.recognition =  new webkitSpeechRecognition();
    }

    this.recognition.continuous = true;

    this.recognition.onaudiostart = (result: any) => {
        this.voiceRecognitionStateSignal.set(VoiceStateEnum.On);
        this.recognitionOn = true;
    }

    this.recognition.onaudioend = (result: any) => {
        this.voiceRecognitionStateSignal.set(VoiceStateEnum.Off);
        this.recognitionOn = false;
    }

    this.recognition.onerror = (event: any) => {
      this.voiceRecognitionStateSignal.set(VoiceStateEnum.Off);
      console.log("ON Error Event: ",event.error);
    } 

    this.recognition.onresult = (event: any) => {
        // event.results contains the recognized phrases
        const transcript = 
        Array.from(event.results) as any[];

        this.voiceRecognitionResultSignal.set(transcript);
        console.log('Recognized text:', transcript);
    };


    console.log(this.recognition);
  }

  startRecord() {
    if(this.recognition) {
        this.voiceRecognitionStateSignal.set(VoiceStateEnum.Waiting);
      this.recognition.start();
    } else {
      alert("Recognition API does not appear to be supported.");
    }
  }

  stopRecord() {
    if(this.recognition) {
      this.recognition.stop();
    }
  }
}
