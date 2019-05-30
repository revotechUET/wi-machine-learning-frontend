module.exports = {
  "definitions": [
    {
      name: "linear_regression",
      display: "Linear regression",
      parameters: [
        {
          name: "degree",
          display: "Degree",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: 2
        }
      ]
    },
    {
      name: "huber",
      display: "Huber regression",
      parameters: [
        {
          name: "epsilon",
          display: "Epsilon",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "alpha",
          display: "Alpha",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "tol",
          display: "Tol",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "max_iter",
          display: "Max iterator",
          type: "number",
          min: 1,
          max: 1000,
          step: 1,
          value: 100
        }
      ]
    },
    {
      name: "lasso",
      display: "Lasso regression",
      parameters: [
        {
          name: "alpha",
          display: "Alpha",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "tol",
          display: "Tol",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "max_iter",
          display: "Max iterator",
          type: "number",
          min: 1,
          max: 1000,
          step: 1,
          value: 100
        }
      ]
    },
    {
      name: "decision_tree",
      display: "Decision Tree",
      parameters: [
        {
          name: "max_depth",
          display: "Max depth",
          type: "number",
          min: 0,
          max: 1000,
          step: 1,
          value: 0
        },
        {
          name: "max_features",
          display: "Max features",
          type: "number",
          min: 0,
          max: 1000,
          step: 1,
          value: 0
        },
        {
          name: "min_sample_split",
          display: "Min sample split",
          type: "number",
          min: 1,
          max: 10,
          step: 1,
          value: 2
        }
      ]
    },
    {
      name: "random_forest",
      display: "Random Forest",
      parameters: [
        {
          name: "max_depth",
          display: "Max depth",
          type: "number",
          min: 0,
          max: 1000,
          step: 1,
          value: 0
        },
        {
          name: "max_features",
          display: "Max features",
          type: "number",
          min: 0,
          max: 1000,
          step: 1,
          value: 0
        },
        {
          name: "n_estimators",
          display: "Number of Estimator",
          type: "number",
          min: 1,
          max: 1000,
          step: 1,
          value: 10
        },
        {
          name: "bootstrap",
          display: "Bootstrap",
          type: "boolean",
          value: true
        }
      ]
    },
    {
      name: "xgboost",
      display: "XGBoost",
      parameters: [
        {
          name: "max_depth",
          display: "Max depth",
          type: "number",
          min: 0,
          max: 1000,
          step: 1,
          value: 0
        },
        {
          name: "n_estimators",
          display: "Number of Estimator",
          type: "number",
          min: 1,
          max: 1000,
          step: 1,
          value: 10
        },
        {
          name: "gamma",
          display: "Gamma",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "reg_alpha",
          display: "Reg alpha",
          type: "number",
          min: 0,
          max: 1,
          step: 1e-4,
          value: 0
        },
        {
          name: "reg_lamda",
          display: "Reg lamda",
          type: "number",
          min: 0,
          max: 1,
          step: 1e-4,
          value: 0
        },
        {
          name: "booster",
          display: "Booster",
          type: "choice",
          items: [
            {
              value: "gbtree",
              display: "gbtree"
            },
            {
              value: "dart",
              display: "dart"
            },
            {
              value: "gblinear",
              display: "gblinear"
            }
          ],
          value: "gbtree"
        }
      ]
    },
    {
      name: "svm",
      display: "Support Vector Machine",
      parameters: [
        {
          name: "kernel",
          display: "Kernel",
          type: "choice",
          items: [
            {
              value: "poly",
              display: "Poly"
            },
            {
              value: "linear",
              display: "Linear"
            },
            {
              value: "sigmoid",
              display: "Sigmoid"
            },
            {
              value: "lbf",
              display: "lbf"
            }
          ],
          value: "sigmoid"
        },
        {
          name: "degree",
          display: "Degree",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          value: 2
        },
        {
          name: "tol",
          display: "Tol",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "gamma",
          display: "Gamma",
          type: "number",
          min: 1e-4,
          max: 1,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "max_iter",
          display: "Max iterator",
          type: "number",
          min: 1,
          max: 1000,
          step: 1,
          value: 100
        }
      ]
    },
    {
      name: "neural_network",
      display: "Neural Network",
      parameters: [
        {
          name: "max_iter",
          display: "Max iterator",
          type: "number",
          min: 1,
          max: 10000,
          step: 1,
          value: 1000
        },
        {
          name: "solver",
          display: "Solver",
          type: "choice",
          items: [
            {
              value: "adam",
              display: "Adam"
            },
            {
              value: "sgd",
              display: "SDG"
            },
            {
              value: "lbfgs",
              display: "lbfgs"
            }
          ],
          value: "adam"
        },
        {
          name: "hidden_layer_sizes",
          display: "Hidden layer sizes",
          type: "array",
          value: [10, 10]
        },
        {
          name: "activation",
          display: "Activation",
          type: "choice",
          items: [
            {
              value: "relu",
              display: "Relu"
            },
            {
              value: "tanh",
              display: "Tanh"
            },
            {
              value: "logistic",
              display: "Logistic"
            }
          ],
          value: "relu"
        },
        {
          name: "learning_rate_init",
          display: "Learning rate init",
          type: "number",
          min: 1e-4,
          max: 20,
          step: 1e-4,
          value: 1e-4
        },
        {
          name: "tol",
          display: "Tol",
          type: "number",
          min: 1e-4,
          max: 20,
          step: 1e-4,
          value: 1e-4
        }
      ]
    }
  ]
}
