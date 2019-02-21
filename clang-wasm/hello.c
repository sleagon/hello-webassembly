#include<stdio.h>

// use -s EXPORTED_FUNCTIONS='["_minus"]' to export function minus
int minus(int a, int b) {
  return a - b;
}

int main(void) {
  printf("a - b = %d\n", minus(2, 1));
}