#include <stdio.h>

int main() {
    int rows, cols;
    printf("Enter the number of rows: ");
    scanf("%d", &rows);
    printf("Enter the number of columns: ");
    scanf("%d", &cols);
    if (rows <= 0 || cols <= 0) {
        printf("Invalid dimensions. Please enter positive values for rows and columns.\n");
        return 1; // Return an error code
    }
    //making grid lol
    printf("\nGrid with %d rows and %d columns:\n", rows, cols);
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("+---");
        }
        printf("+\n");

        for (int j = 0; j < cols; j++) {
            printf("|   ");
        }
        printf("|\n");
    }
    for (int j = 0; j < cols; j++) {
        printf("+---");
    }
    printf("+\n");

    return 0; //return 0 cause it worked B)
}
