#include<stdio.h>
#include <time.h>
#include <stdlib.h>


// use -s EXPORTED_FUNCTIONS='["_uuid"]' to export function minus
char* uuid() {
  srand( (unsigned)time( NULL ) );
  static char charset[] = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";        
  char *randomString = NULL;
  int length = 32;
  if (length) {
    randomString = malloc(sizeof(char) * (length +1));

    if (randomString) {
      for (int n = 0;n < length;n++) {
          int key = rand() % (int)(sizeof(charset) -1);
          randomString[n] = charset[key];
      }

      randomString[length] = '\0';
    }
  }
  return randomString;
}